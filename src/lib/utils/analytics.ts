// Type declarations for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Google Analytics configuration
export const analytics = {
  measurementId: '', // Add your GA4 measurement ID here (e.g., 'G-XXXXXXXXXX')
  enabled: false     // Set to true when ready to track
};

// Track page views
export function trackPageView(url: string, title?: string) {
  if (analytics.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analytics.measurementId, {
      page_title: title,
      page_location: url
    });
  }

  console.log('Analytics: Page view tracked', { url, title });
}

// Track custom events
export function trackEvent(eventName: string, properties: Record<string, any> = {}) {
  if (analytics.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }

  console.log('Analytics: Event tracked', { eventName, properties });
}

// Project-specific tracking functions
export function trackProjectView(projectSlug: string, projectTitle: string) {
  trackEvent('project_viewed', {
    project_slug: projectSlug,
    project_title: projectTitle
  });
}

export function trackExternalClick(projectSlug: string, url: string) {
  trackEvent('external_link_clicked', {
    project_slug: projectSlug,
    external_url: url
  });
}