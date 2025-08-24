'use client'

import { useEffect } from 'react'
import clarity from '@microsoft/clarity'

interface MicrosoftClarityProps {
  projectId: string
  enabled?: boolean
}

export default function MicrosoftClarity({ projectId, enabled = true }: MicrosoftClarityProps) {
  useEffect(() => {
    if (!enabled || !projectId || typeof window === 'undefined') {
      return
    }

    try {
      // Initialize Clarity with basic configuration
      clarity.init(projectId)
      console.log('Microsoft Clarity initialized successfully')
    } catch (error) {
      console.error('Failed to initialize Microsoft Clarity:', error)
    }
  }, [projectId, enabled])

  // This component doesn't render anything visible
  return null
}

// Utility functions for tracking custom events
export const trackRelocationInquiry = (data: {
  currentCity: string
  targetCity: string
  timeline: string
  budget?: string
}) => {
  if (typeof window !== 'undefined' && window.clarity) {
    clarity.event('relocation-inquiry', {
      currentCity: data.currentCity,
      targetCity: data.targetCity,
      timeline: data.timeline,
      budget: data.budget || 'not-specified'
    })
  }
}

export const trackServicePageView = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    clarity.event('service-page-view', {
      service: serviceName,
      timestamp: new Date().toISOString()
    })
  }
}

export const trackContactFormSubmit = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && window.clarity) {
    clarity.event('contact-form-submit', {
      formType,
      success,
      timestamp: new Date().toISOString()
    })
  }
}

export const trackPhoneClick = (phoneNumber: string, location: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    clarity.event('phone-click', {
      phoneNumber,
      location,
      timestamp: new Date().toISOString()
    })
  }
}

export const trackMapInteraction = (interactionType: string, location: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    clarity.event('map-interaction', {
      type: interactionType,
      location,
      timestamp: new Date().toISOString()
    })
  }
}

// Hook for using Clarity in components
export const useClarity = () => {
  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.clarity) {
      clarity.event(eventName, {
        ...data,
        timestamp: new Date().toISOString()
      })
    }
  }

  const setUserId = (userId: string) => {
    if (typeof window !== 'undefined' && window.clarity) {
      clarity.setUserId(userId)
    }
  }

  const setSessionId = (sessionId: string) => {
    if (typeof window !== 'undefined' && window.clarity) {
      clarity.setSessionId(sessionId)
    }
  }

  const pause = () => {
    if (typeof window !== 'undefined' && window.clarity) {
      clarity.pause()
    }
  }

  const resume = () => {
    if (typeof window !== 'undefined' && window.clarity) {
      clarity.resume()
    }
  }

  return {
    trackEvent,
    setUserId,
    setSessionId,
    pause,
    resume
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    clarity: typeof clarity
  }
}
