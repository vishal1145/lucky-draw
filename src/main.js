import { createApp } from 'vue'
import App from './App.vue'
// import { BootstrapVueNext } from 'bootstrap-vue-next';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import router from './router'
import './assets/main.css'
import apiService from "./core/api/api-service";
import mixpanelService from "./core/analytics/mixpanel-service";

const app = createApp(App)

// Initialize Mixpanel
// Replace 'YOUR_MIXPANEL_TOKEN' with your actual Mixpanel project token
// You can also use environment variables: import.meta.env.VITE_MIXPANEL_TOKEN
const mixpanelToken = import.meta.env.VITE_MIXPANEL_TOKEN || '1a88efacc6d56b7976fd0f5880014fc1'
if (mixpanelToken && mixpanelToken !== '1a88efacc6d56b7976fd0f5880014fc1') {
  mixpanelService.init(mixpanelToken)
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

// Make apiService available globally
app.config.globalProperties.$apiService = apiService;
// Make mixpanelService available globally
app.config.globalProperties.$mixpanel = mixpanelService;
// app.use(BootstrapVueNext);
app.use(router)
app.mount('#app')