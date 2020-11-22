import vue from 'vue';
import App from './App.vue';
import router from './router';
//import store from './store';

//application en mode développement
vue.config.productionTip = false;

//nouvelle instance de Vue
new vue({
  router,
  render: h => h(App)
}).$mount('#app');
