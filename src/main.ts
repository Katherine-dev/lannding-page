import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'normalize.css/normalize.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
