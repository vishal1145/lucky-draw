import { onMounted, onUnmounted } from 'vue'
import mixpanelService from '@/core/analytics/mixpanel-service'

/**
 * Composable for using Mixpanel in Vue components
 * @returns {object} Mixpanel methods
 */
export function useMixpanel() {
  /**
   * Track an event
   * @param {string} eventName - Name of the event
   * @param {object} properties - Additional properties
   */
  const track = (eventName, properties = {}) => {
    mixpanelService.track(eventName, properties)
  }

  /**
   * Identify a user
   * @param {string} distinctId - Unique identifier
   */
  const identify = (distinctId) => {
    mixpanelService.identify(distinctId)
  }

  /**
   * Set user properties
   * @param {object} properties - User properties
   */
  const setUserProperties = (properties) => {
    mixpanelService.setUserProperties(properties)
  }

  /**
   * Track page view
   * @param {string} pageName - Page name
   * @param {object} properties - Additional properties
   */
  const trackPageView = (pageName, properties = {}) => {
    mixpanelService.trackPageView(pageName, properties)
  }

  /**
   * Reset user identity
   */
  const reset = () => {
    mixpanelService.reset()
  }

  /**
   * Register super properties
   * @param {object} properties - Super properties
   */
  const register = (properties) => {
    mixpanelService.register(properties)
  }

  return {
    track,
    identify,
    setUserProperties,
    trackPageView,
    reset,
    register
  }
}

