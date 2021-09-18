import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import modalStore from './modules/modal.js';

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    modalStore: modalStore,
  },
});
