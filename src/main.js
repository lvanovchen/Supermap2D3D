import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import axios from './http';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './icons';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');