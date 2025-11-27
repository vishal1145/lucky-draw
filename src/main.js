import { createApp } from 'vue'
import App from './App.vue'
// import { BootstrapVueNext } from 'bootstrap-vue-next';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import router from './router'
import './assets/main.css'
import apiService from "./core/api/api-service"
import mixpanelService from "./core/analytics/mixpanel-service"

const app = createApp(App)

// 🔹 1) Get Mixpanel token from .env
// Make sure you set: VITE_MIXPANEL_TOKEN=your_real_token in .env
const mixpanelToken = "1a88efacc6d56b7976fd0f5880014fc1"

if (mixpanelToken) {
  // 🔹 2) Initialize Mixpanel
  mixpanelService.init(mixpanelToken)

  // 🔹 3) Send ONE test event when app loads
  if (mixpanelService.isInitialized) {
    mixpanelService.trackPageView('App Loaded', {
      route: 'init',
      fullPath: window.location.pathname + window.location.search
    })
  }
} else {
  console.warn(
    'Mixpanel is NOT initialized – please set VITE_MIXPANEL_TOKEN in your .env file'
  )
}

// Track page views on route changes
router.afterEach((to) => {
  if (mixpanelService.isInitialized) {
    mixpanelService.trackPageView(to.name || to.path, {
      route: to.path,
      fullPath: to.fullPath
    })
  }
})

// 🔹 5) Make services available globally
app.config.globalProperties.$apiService = apiService
app.config.globalProperties.$mixpanel = mixpanelService

app.use(router)
app.mount('#app')