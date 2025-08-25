'use client';

import clarity from '@microsoft/clarity';
import { useEffect } from 'react';

interface MicrosoftClarityProps {
  projectId: string;
  enabled?: boolean;
}

export default function MicrosoftClarity({ projectId, enabled = true }: MicrosoftClarityProps) {
  useEffect(() => {
    if (!enabled || !projectId || typeof window === 'undefined') {
      return;
    }

    try {
      // Initialize Clarity with basic configuration
      clarity.init(projectId);
      console.log('Microsoft Clarity initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Microsoft Clarity:', error);
    }
  }, [projectId, enabled]);

  // This component doesn't render anything visible
  return null;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    clarity: typeof clarity;
  }
}
