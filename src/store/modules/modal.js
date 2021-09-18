const modalStore = {
  namespaced: true,
  state: {
    modalList: [],
    speed: null,
  },
  getters: {},
  mutations: {
    MU_MODAL: (state, { name, visible, opener, msg, callback, confirm }) => {
      const hasNameIdx = state.modalList.findIndex((el) => el.name === name);
      if (visible) {
        if (hasNameIdx !== -1) return;
        state.modalList.push({
          name: name,
          opener: opener,
          msg: msg,
          callback: callback,
          confirm: confirm,
        });
      } else {
        if (hasNameIdx === -1) return;
        state.modalList.splice(hasNameIdx, 1);
      }
    },
    MU_SPEED: (state, { speed }) => {
      state.speed = speed ?? 0.3;
    },
  },
  actions: {
    AC_MODAL: ({ commit }, payload) => {
      commit('MU_MODAL', payload);
    },
    AC_SPEED: ({ commit }, speed) => {
      commit('MU_SPEED', { speed });
    },
  },
};

export default modalStore;
