import mixpanel from 'mixpanel-browser'

class MixpanelService {
  constructor() {
    this.isInitialized = false
  }

  /**
   * Initialize Mixpanel with your project token
   * @param {string} token - Your Mixpanel project token
   * @param {object} config - Optional configuration object
   */
  init(token, config = {}) {
    if (!token) {
      console.warn('Mixpanel token is required')
      return
    }

    const defaultConfig = {
      debug: import.meta.env.DEV, // Enable debug mode in development
      track_pageview: false, // We'll handle page views manually
      persistence: 'localStorage',
      ...config
    }

    mixpanel.init(token, defaultConfig)
    this.isInitialized = true
  }

  /**
   * Track an event
   * @param {string} eventName - Name of the event
   * @param {object} properties - Additional properties for the event
   */
  track(eventName, properties = {}) {
    if (!this.isInitialized) {
      console.warn('Mixpanel is not initialized. Call init() first.')
      return
    }

    mixpanel.track(eventName, properties)
  }

  /**
   * Identify a user
   * @param {string} distinctId - Unique identifier for the user
   */
  identify(distinctId) {
    if (!this.isInitialized) {
      console.warn('Mixpanel is not initialized. Call init() first.')
      return
    }

    mixpanel.identify(distinctId)
  }

  /**
   * Set user properties
   * @param {object} properties - User properties to set
   */
  setUserProperties(properties) {
    if (!this.isInitialized) {
      console.warn('Mixpanel is not initialized. Call init() first.')
      return
    }

    mixpanel.people.set(properties)
  }

  /**
   * Increment user properties
   * @param {object} properties - Properties to increment
   */
  increment(properties) {
    if (!this.isInitialized) {
      console.warn('Mixpanel is not initialized. Call init() first.')
      return
    }

    mixpanel.people.increment(properties)
  }

  /**
   * Set super properties (sent with every event)
   * @param {object} properties - Super properties to set
   */
  register(properties) {
    if (!this.isInitialized) {
      console.warn('Mixpanel is not initialized. Call init() first.')
      return
    }

    mixpanel.register(properties)
  }

  /**
   * Reset user identity (useful for logout)
   */
  reset() {
    if (!this.isInitialized) {
      console.warn('Mixpanel is not initialized. Call init() first.')
      return
    }

    mixpanel.reset()
  }

  /**
   * Track page view
   * @param {string} pageName - Name of the page
   * @param {object} properties - Additional properties
   */
  trackPageView(pageName, properties = {}) {
    this.track('Page View', {
      page: pageName,
      ...properties
    })
  }

  /**
   * Get the Mixpanel instance (for advanced usage)
   */
  getInstance() {
    return mixpanel
  }
}

// Export a singleton instance
const mixpanelService = new MixpanelService()
export default mixpanelService

