/**
 * Meta Pixel (Facebook Pixel) Tracking Utility
 * Track events and send data to Meta Ads Manager
 */

export const PIXEL_ID = "480399854494345"

/**
 * Track contact event - WhatsApp CTA Click
 * Used for tracking when user clicks on WhatsApp button in CTA section
 */
export const trackContactEvent = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Contact", {
      content_name: "WhatsApp CTA",
      content_type: "lead",
      description: "User clicked WhatsApp button in CTA section",
    })
  }
}

/**
 * Track promo event - Promo Button Click
 * Used for tracking when user clicks on Promo button
 */
export const trackPromoEvent = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Contact", {
      content_name: "Promo Button",
      content_type: "lead",
      description: "User clicked Promo button to get special offers",
    })
  }
}

/**
 * Track WhatsApp floating button click
 * Used for tracking when user clicks on floating WhatsApp button
 */
export const trackWhatsAppFloatingClick = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Contact", {
      content_name: "WhatsApp Floating Button",
      content_type: "lead",
      description: "User clicked floating WhatsApp button",
    })
  }
}

/**
 * Track property detail view
 * Used for tracking when user views property details
 */
export const trackPropertyDetailView = (propertyName: string) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "ViewContent", {
      content_name: propertyName,
      content_type: "property",
      description: `User viewed details for ${propertyName}`,
    })
  }
}

/**
 * Track KPR simulator interaction
 * Used for tracking when user interacts with the KPR simulator
 */
export const trackKPRSimulatorInteraction = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Contact", {
      content_name: "KPR Simulator",
      content_type: "lead",
      description: "User interacted with KPR simulator tool",
    })
  }
}

/**
 * Track Lead event - General purpose lead tracking
 * Can be used for various conversion tracking scenarios
 */
export const trackLeadEvent = (leadSource: string, description?: string) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Lead", {
      content_name: leadSource,
      content_type: "lead",
      description: description || `Lead from ${leadSource}`,
    })
  }
}

/**
 * Track page view
 * Called automatically by Meta Pixel, but can be used for custom tracking
 */
export const trackPageView = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "PageView")
  }
}
