'use client';

import { useCallback, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

// Extend PerformanceEntry for FirstInputEntry
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: Element;
}

// Extend PerformanceEntry for LayoutShiftEntry
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
  sources?: Array<{
    node?: Node;
    currentRect?: DOMRectReadOnly;
    previousRect?: DOMRectReadOnly;
  }>;
}

export default function PerformanceMonitor() {
  const sendMetrics = useCallback((metrics: PerformanceMetrics) => {
    // Send to analytics service (Google Analytics, etc.)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(metrics.lcp || 0),
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb,
        },
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, []);

  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          sendMetrics({ fcp: fcpEntry.startTime, lcp: null, fid: null, cls: null, ttfb: null });
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }, [sendMetrics]);

  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1] as PerformanceEntry;
        if (lcpEntry) {
          sendMetrics({ fcp: null, lcp: lcpEntry.startTime, fid: null, cls: null, ttfb: null });
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, [sendMetrics]);

  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          // Check if it's a FirstInputEntry
          if ('processingStart' in entry) {
            const firstInputEntry = entry as FirstInputEntry;
            if (firstInputEntry.processingStart && firstInputEntry.startTime) {
              const fid = firstInputEntry.processingStart - firstInputEntry.startTime;
              sendMetrics({ fcp: null, lcp: null, fid, cls: null, ttfb: null });
            }
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }, [sendMetrics]);

  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Check if it's a LayoutShiftEntry
          if ('hadRecentInput' in entry) {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
              sendMetrics({ fcp: null, lcp: null, fid: null, cls: clsValue, ttfb: null });
            }
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }, [sendMetrics]);

  const measureTTFB = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const ttfb = navEntry.responseStart - navEntry.requestStart;
            sendMetrics({ fcp: null, lcp: null, fid: null, cls: null, ttfb });
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, [sendMetrics]);

  const measureUserEngagement = useCallback(() => {
    let startTime = Date.now();
    let isActive = true;
    let totalActiveTime = 0;

    const updateActiveTime = () => {
      if (isActive) {
        totalActiveTime += Date.now() - startTime;
        startTime = Date.now();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        updateActiveTime();
        isActive = false;
      } else {
        startTime = Date.now();
        isActive = true;
      }
    };

    const handleBeforeUnload = () => {
      updateActiveTime();

      // Send engagement data
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'user_engagement', {
          event_category: 'Engagement',
          event_label: 'Session Duration',
          value: Math.round(totalActiveTime / 1000), // Convert to seconds
          custom_map: {
            session_duration: totalActiveTime,
            page_views: window.performance?.navigation?.type === 1 ? 1 : 0,
          },
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const measureScrollDepth = useCallback(() => {
    let maxScrollDepth = 0;
    let scrollEvents = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
      }

      scrollEvents++;
    };

    const handleBeforeUnload = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'Engagement',
          event_label: 'Scroll Depth',
          value: maxScrollDepth,
          custom_map: {
            max_scroll_depth: maxScrollDepth,
            scroll_events: scrollEvents,
          },
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Measure Core Web Vitals
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();

    // Measure user engagement
    const cleanupEngagement = measureUserEngagement();
    const cleanupScroll = measureScrollDepth();

    return () => {
      cleanupEngagement();
      cleanupScroll();
    };
  }, [
    measureFCP,
    measureLCP,
    measureFID,
    measureCLS,
    measureTTFB,
    measureUserEngagement,
    measureScrollDepth,
  ]);

  // This component doesn't render anything
  return null;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
