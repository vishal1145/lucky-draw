import { createApp } from 'vue'
import App from './App.vue'
// import { BootstrapVueNext } from 'bootstrap-vue-next';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import router from './router'
import './assets/main.css'
import apiService from "./core/api/api-service";

const app = createApp(App)

// Make apiService available globally
app.config.globalProperties.$apiService = apiService;
// app.use(BootstrapVueNext);
app.use(router)
app.mount('#app')