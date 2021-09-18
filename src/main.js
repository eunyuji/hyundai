import Vue from 'vue';
import './pollyfills';
import router from './router';
import store from './store';
import VueNotify from 'vue-notifyjs';
import VeeValidate from 'vee-validate';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import App from './App.vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

// Plugins
import GlobalComponents from './gloablComponents';
import GlobalDirectives from './globalDirectives';
import SideBar from './components/UIComponents/SidebarPlugin';

// library imports

import '@/assets/sass/paper-dashboard.scss';
import '@/assets/sass/element_variables.scss';
import '@/assets/sass/demo.scss';
import '@/assets/sass/common.scss';
import PortalVue from 'portal-vue';
import { modal } from '@/mixin/modal';

import sidebarLinks from './sidebarLinks';
// plugin setup

Vue.use(VueLodash, { lodash: lodash });
Vue.use(GlobalDirectives);
Vue.use(GlobalComponents);
Vue.use(VueNotify);
Vue.use(SideBar, { sidebarLinks: sidebarLinks });
Vue.use(VeeValidate);
locale.use(lang);
//mixin
Vue.mixin(modal);
//add
Vue.use(PortalVue);
Vue.config.productionTip = false;

/**
 * component 전역 등록
 */
const requireComponent = require.context(
  '@/components/global',
  true,
  /[\w-]+\.vue$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = lodash.upperFirst(
    lodash.camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
