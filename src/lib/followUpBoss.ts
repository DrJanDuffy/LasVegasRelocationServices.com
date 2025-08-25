/**
 * Follow Up Boss API Integration
 * CRM operations for real estate contacts and leads
 */

export interface FUBContact {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  tags?: string[];
  source?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FUBLead {
  id: string;
  contactId: string;
  status: string;
  type: 'buyer' | 'seller' | 'both';
  priceRange?: {
    min: number;
    max: number;
  };
  targetAreas?: string[];
  timeline?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FUBTask {
  id: string;
  contactId: string;
  title: string;
  description?: string;
  dueDate?: string;
  status: 'pending' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

class FollowUpBossAPI {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.FOLLOW_UP_BOSS_API_KEY || '';
    this.baseUrl = process.env.FOLLOW_UP_BOSS_API_URL || 'https://api.followupboss.com/v1';

    if (!this.apiKey) {
      throw new Error('Follow Up Boss API key is required');
    }
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Follow Up Boss API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Contact Management
  async getContacts(params?: {
    limit?: number;
    offset?: number;
    tags?: string[];
    source?: string;
  }): Promise<{ contacts: FUBContact[]; total: number }> {
    const searchParams = new URLSearchParams();
    if (params?.limit) {
      searchParams.append('limit', params.limit.toString());
    }
    if (params?.offset) {
      searchParams.append('offset', params.offset.toString());
    }
    if (params?.tags) {
      searchParams.append('tags', params.tags.join(','));
    }
    if (params?.source) {
      searchParams.append('source', params.source);
    }

    return this.request(`/contacts?${searchParams.toString()}`);
  }

  async getContact(id: string): Promise<FUBContact> {
    return this.request(`/contacts/${id}`);
  }

  async createContact(
    contact: Omit<FUBContact, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<FUBContact> {
    return this.request('/contacts', {
      method: 'POST',
      body: JSON.stringify(contact),
    });
  }

  async updateContact(id: string, updates: Partial<FUBContact>): Promise<FUBContact> {
    return this.request(`/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async addTagsToContact(id: string, tags: string[]): Promise<void> {
    const contact = await this.getContact(id);
    const existingTags = contact.tags || [];
    const newTags = [...new Set([...existingTags, ...tags])];

    await this.updateContact(id, { tags: newTags });
  }

  // Lead Management
  async getLeads(params?: {
    limit?: number;
    offset?: number;
    status?: string;
    type?: string;
  }): Promise<{ leads: FUBLead[]; total: number }> {
    const searchParams = new URLSearchParams();
    if (params?.limit) {
      searchParams.append('limit', params.limit.toString());
    }
    if (params?.offset) {
      searchParams.append('offset', params.offset.toString());
    }
    if (params?.status) {
      searchParams.append('status', params.status);
    }
    if (params?.type) {
      searchParams.append('type', params.type);
    }

    return this.request(`/leads?${searchParams.toString()}`);
  }

  async createLead(lead: Omit<FUBLead, 'id' | 'createdAt' | 'updatedAt'>): Promise<FUBLead> {
    return this.request('/leads', {
      method: 'POST',
      body: JSON.stringify(lead),
    });
  }

  async updateLeadStatus(id: string, status: string): Promise<FUBLead> {
    return this.request(`/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Task Management
  async getTasks(params?: {
    limit?: number;
    offset?: number;
    status?: string;
    assignedTo?: string;
    dueDate?: string;
  }): Promise<{ tasks: FUBTask[]; total: number }> {
    const searchParams = new URLSearchParams();
    if (params?.limit) {
      searchParams.append('limit', params.limit.toString());
    }
    if (params?.offset) {
      searchParams.append('offset', params.offset.toString());
    }
    if (params?.status) {
      searchParams.append('status', params.status);
    }
    if (params?.assignedTo) {
      searchParams.append('assignedTo', params.assignedTo);
    }
    if (params?.dueDate) {
      searchParams.append('dueDate', params.dueDate);
    }

    return this.request(`/tasks?${searchParams.toString()}`);
  }

  async createTask(task: Omit<FUBTask, 'id' | 'createdAt' | 'updatedAt'>): Promise<FUBTask> {
    return this.request('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
    });
  }

  async completeTask(id: string): Promise<FUBTask> {
    return this.request(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status: 'completed' }),
    });
  }

  // Search and Filtering
  async searchContacts(query: string): Promise<FUBContact[]> {
    return this.request(`/contacts/search?q=${encodeURIComponent(query)}`);
  }

  async getContactsByTag(tag: string): Promise<FUBContact[]> {
    const result = await this.getContacts({ tags: [tag] });
    return result.contacts;
  }

  async getContactsBySource(source: string): Promise<FUBContact[]> {
    const result = await this.getContacts({ source });
    return result.contacts;
  }

  // Analytics and Reporting
  async getContactStats(): Promise<{
    total: number;
    bySource: Record<string, number>;
    byTag: Record<string, number>;
    recentActivity: number;
  }> {
    return this.request('/contacts/stats');
  }

  async getLeadStats(): Promise<{
    total: number;
    byStatus: Record<string, number>;
    byType: Record<string, number>;
    conversionRate: number;
  }> {
    return this.request('/leads/stats');
  }

  // Webhook Management
  async createWebhook(
    url: string,
    events: string[]
  ): Promise<{ id: string; url: string; events: string[] }> {
    return this.request('/webhooks', {
      method: 'POST',
      body: JSON.stringify({ url, events }),
    });
  }

  async deleteWebhook(id: string): Promise<void> {
    await this.request(`/webhooks/${id}`, {
      method: 'DELETE',
    });
  }
}

// Export lazy singleton instance
let _followUpBossAPI: FollowUpBossAPI | null = null;

export const getFollowUpBossAPI = (): FollowUpBossAPI | null => {
  if (typeof window !== 'undefined') {
    // Client-side only
    return null;
  }

  if (!_followUpBossAPI) {
    try {
      _followUpBossAPI = new FollowUpBossAPI();
    } catch (error) {
      console.warn('Follow Up Boss API not available:', error);
      return null;
    }
  }

  return _followUpBossAPI;
};

export const followUpBossAPI = getFollowUpBossAPI();

// Utility functions for common operations
export const createRelocationLead = async (contactData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentCity: string;
  targetCity: string;
  timeline: string;
  budget?: string;
  notes?: string;
}) => {
  try {
    const api = getFollowUpBossAPI();
    if (!api) {
      throw new Error('Follow Up Boss API not available');
    }

    // Create contact
    const contact = await api.createContact({
      firstName: contactData.firstName,
      lastName: contactData.lastName,
      email: contactData.email,
      phone: contactData.phone,
      address: {
        city: contactData.currentCity,
      },
      tags: ['relocation-lead', contactData.currentCity, contactData.targetCity],
      source: 'website-form',
    });

    // Create lead
    const lead = await api.createLead({
      contactId: contact.id,
      status: 'new',
      type: 'buyer',
      targetAreas: [contactData.targetCity],
      timeline: contactData.timeline,
      notes: `Relocation from ${contactData.currentCity} to ${contactData.targetCity}. ${contactData.notes || ''}`,
    });

    // Create follow-up task
    await api.createTask({
      contactId: contact.id,
      title: 'Follow up on relocation inquiry',
      description: `Contact ${contactData.firstName} about their relocation from ${contactData.currentCity} to ${contactData.targetCity}`,
      dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
      status: 'pending',
      priority: 'high',
    });

    return { contact, lead };
  } catch (error) {
    console.error('Error creating relocation lead:', error);
    throw error;
  }
};

export const addContactToCampaign = async (contactId: string, campaignName: string) => {
  try {
    const api = getFollowUpBossAPI();
    if (!api) {
      throw new Error('Follow Up Boss API not available');
    }

    await api.addTagsToContact(contactId, [campaignName, 'active-campaign']);

    // Create campaign task
    await api.createTask({
      contactId,
      title: `Campaign: ${campaignName}`,
      description: `Contact added to ${campaignName} campaign`,
      status: 'pending',
      priority: 'medium',
    });

    return true;
  } catch (error) {
    console.error('Error adding contact to campaign:', error);
    throw error;
  }
};
