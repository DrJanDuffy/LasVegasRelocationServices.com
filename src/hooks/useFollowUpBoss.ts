import { useCallback, useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentCity: string;
  targetCity: string;
  timeline: string;
  budget?: string;
  notes?: string;
}

interface UseFollowUpBossReturn {
  createRelocationLead: (data: ContactFormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export function useFollowUpBoss(): UseFollowUpBossReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const createRelocationLead = useCallback(async (data: ContactFormData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          source: "website-form",
          campaign: "relocation-inquiry",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        // You can add additional success handling here
        // - Show success message
        // - Redirect to thank you page
        // - Track conversion
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error creating relocation lead:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    createRelocationLead,
    isLoading,
    error,
    success,
  };
}

// Hook for managing Follow Up Boss contacts
export function useFollowUpBossContacts() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = useCallback(
    async (params?: { limit?: number; tags?: string[]; source?: string }) => {
      setIsLoading(true);
      setError(null);

      try {
        const searchParams = new URLSearchParams();
        if (params?.limit) searchParams.append("limit", params.limit.toString());
        if (params?.tags) searchParams.append("tags", params.tags.join(","));
        if (params?.source) searchParams.append("source", params.source);

        const response = await fetch(`/api/follow-up-boss/contacts?${searchParams.toString()}`);

        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }

        const result = await response.json();
        setContacts(result.contacts || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch contacts");
        console.error("Error fetching contacts:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const addContactToCampaign = useCallback(
    async (contactId: string, campaignName: string) => {
      try {
        const response = await fetch("/api/follow-up-boss/campaigns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contactId, campaignName }),
        });

        if (!response.ok) {
          throw new Error("Failed to add contact to campaign");
        }

        // Refresh contacts list
        await fetchContacts();
        return true;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to add contact to campaign");
        console.error("Error adding contact to campaign:", err);
        return false;
      }
    },
    [fetchContacts],
  );

  return {
    contacts,
    isLoading,
    error,
    fetchContacts,
    addContactToCampaign,
  };
}

// Hook for Follow Up Boss analytics
export function useFollowUpBossAnalytics() {
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/follow-up-boss/stats");

      if (!response.ok) {
        throw new Error("Failed to fetch analytics");
      }

      const result = await response.json();
      setStats(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch analytics");
      console.error("Error fetching analytics:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    stats,
    isLoading,
    error,
    fetchStats,
  };
}
