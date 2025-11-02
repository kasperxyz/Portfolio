// Type declarations for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Google Analytics configuration
export const analytics = {
  measurementId: 'G-VLBK6QXQ4X', // Add your GA4 measurement ID here (e.g., 'G-XXXXXXXXXX')
  enabled: true     // Set to true when ready to track
};

// Initialize Google Analytics by injecting the gtag script and wiring window.gtag
export function initAnalytics() {
  if (!analytics.enabled || typeof window === 'undefined') return;
  if (window.gtag) return; // already initialized

  // insert the gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
  document.head.appendChild(script);
  script.onload = () => console.info('gtag script loaded');
  script.onerror = (e) => console.warn('Failed to load gtag script', e);

  // prepare dataLayer and gtag function
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(){(window as any).dataLayer.push(arguments);}
  (window as any).gtag = gtag;

  // init (push to dataLayer). The real gtag library will pick this up once loaded.
  (window as any).gtag('js', new Date());
  (window as any).gtag('config', analytics.measurementId);
}

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