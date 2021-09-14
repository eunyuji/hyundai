import Vue from 'vue';
import './pollyfills';
import router from './router';
import store from './store';
import VueNotify from 'vue-notifyjs';
import VeeValidate from 'vee-validate';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import App from './App.vue';

// Plugins
import GlobalComponents from './gloablComponents';
import GlobalDirectives from './globalDirectives';
import SideBar from './components/UIComponents/SidebarPlugin';

// library imports

import '@/assets/sass/paper-dashboard.scss';
import '@/assets/sass/element_variables.scss';
import '@/assets/sass/demo.scss';
import '@/assets/sass/common.scss';

import sidebarLinks from './sidebarLinks';
// plugin setup
Vue.use(GlobalDirectives);
Vue.use(GlobalComponents);
Vue.use(VueNotify);
Vue.use(SideBar, { sidebarLinks: sidebarLinks });
Vue.use(VeeValidate);
locale.use(lang);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
