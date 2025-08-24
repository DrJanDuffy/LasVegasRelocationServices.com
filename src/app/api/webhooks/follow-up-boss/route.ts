import { type NextRequest, NextResponse } from "next/server";
import { getFollowUpBossAPI } from "@/lib/followUpBoss";

// Verify webhook signature (you should implement this for security)
function verifyWebhookSignature(request: NextRequest, _body: string): boolean {
  const signature = request.headers.get("x-fub-signature");
  const secret = process.env.FOLLOW_UP_BOSS_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return false;
  }

  // Implement signature verification logic here
  // This is a simplified example - you should use proper crypto verification
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();

    // Verify webhook signature
    if (!verifyWebhookSignature(request, body)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(body);
    const event = payload.event;
    const data = payload.data;

    console.log("Follow Up Boss webhook received:", { event, data });

    // Handle different event types
    switch (event) {
      case "contact.created":
        await handleContactCreated(data);
        break;

      case "contact.updated":
        await handleContactUpdated(data);
        break;

      case "lead.created":
        await handleLeadCreated(data);
        break;

      case "lead.status_changed":
        await handleLeadStatusChanged(data);
        break;

      case "task.completed":
        await handleTaskCompleted(data);
        break;

      default:
        console.log(`Unhandled event type: ${event}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing Follow Up Boss webhook:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function handleContactCreated(contact: { id: string; tags?: string[] }) {
  try {
    console.log("New contact created:", contact);

    // Add welcome tag
    await followUpBossAPI.addTagsToContact(contact.id, ["welcome", "new-contact"]);

    // Create welcome task
    await followUpBossAPI.createTask({
      contactId: contact.id,
      title: "Welcome new contact",
      description: "Send welcome email and introduction materials",
      dueDate: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
      status: "pending",
      priority: "medium",
    });

    // You can also trigger other actions here:
    // - Send welcome email
    // - Add to email marketing list
    // - Create personalized content
    // - Send SMS welcome message
  } catch (error) {
    console.error("Error handling contact created:", error);
  }
}

async function handleContactUpdated(contact: { id: string; tags?: string[] }) {
  try {
    console.log("Contact updated:", contact);

    const api = getFollowUpBossAPI();
    if (!api) {
      console.warn("Follow Up Boss API not available");
      return;
    }

    // Check if contact has relocation-related tags
    if (contact.tags?.some((tag: string) => tag.includes("relocation"))) {
      await api.addTagsToContact(contact.id, ["relocation-interest"]);

      // Create relocation follow-up task
      await api.createTask({
        contactId: contact.id,
        title: "Relocation follow-up",
        description: "Contact has shown relocation interest - follow up with resources",
        dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
        status: "pending",
        priority: "high",
      });
    }
  } catch (error) {
    console.error("Error handling contact updated:", error);
  }
}

async function handleLeadCreated(lead: { contactId: string; type: string }) {
  try {
    console.log("New lead created:", lead);

    const api = getFollowUpBossAPI();
    if (!api) {
      console.warn("Follow Up Boss API not available");
      return;
    }

    // Add lead-specific tags
    await api.addTagsToContact(lead.contactId, ["active-lead", `lead-${lead.type}`]);

    // Create lead qualification task
    await api.createTask({
      contactId: lead.contactId,
      title: "Qualify new lead",
      description: `Qualify ${lead.type} lead and determine next steps`,
      dueDate: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(), // 4 hours
      status: "pending",
      priority: "high",
    });
  } catch (error) {
    console.error("Error handling lead created:", error);
  }
}

async function handleLeadStatusChanged(lead: { contactId: string; status: string }) {
  try {
    console.log("Lead status changed:", lead);

    const api = getFollowUpBossAPI();
    if (!api) {
      console.warn("Follow Up Boss API not available");
      return;
    }

    if (lead.status === "qualified") {
      // Lead was qualified - create next steps
      await api.createTask({
        contactId: lead.contactId,
        title: "Qualified lead - next steps",
        description: "Lead has been qualified. Schedule consultation and send materials.",
        dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
        status: "pending",
        priority: "high",
      });

      // Add qualified lead tag
      await api.addTagsToContact(lead.contactId, ["qualified-lead"]);
    } else if (lead.status === "closed") {
      // Lead was closed - create follow-up task
      await api.createTask({
        contactId: lead.contactId,
        title: "Closed lead follow-up",
        description: "Lead was closed. Follow up for feedback and future opportunities.",
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week
        status: "pending",
        priority: "medium",
      });
    }
  } catch (error) {
    console.error("Error handling lead status changed:", error);
  }
}

async function handleTaskCompleted(task: { id: string; contactId: string }) {
  try {
    console.log("Task completed:", task);

    // You can add logic here for when tasks are completed
    // - Send completion notifications
    // - Update contact status
    // - Trigger next actions
    // - Send follow-up communications
  } catch (error) {
    console.error("Error handling task completed:", error);
  }
}

// GET endpoint for webhook verification (if Follow Up Boss requires it)
export async function GET(request: NextRequest) {
  const challenge = request.nextUrl.searchParams.get("challenge");

  if (challenge) {
    return NextResponse.json({ challenge });
  }

  return NextResponse.json({ message: "Follow Up Boss webhook endpoint is active" });
}
