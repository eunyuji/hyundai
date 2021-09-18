import { mapActions } from 'vuex';

const modal = {
  methods: {
    ...mapActions('modalStore', ['AC_MODAL', 'AC_SPEED']),
    alert(param) {
      const options = {
        visible: true,
        ...param,
      };
      this.AC_SPEED(param.speed);
      this.AC_MODAL(options);
    },
    confirm(param) {
      const options = {
        visible: true,
        ...param,
      };
      this.AC_SPEED(param.speed);
      this.AC_MODAL(options);
    },
    modalOpen(param) {
      const options = {
        visible: true,
        ...param,
      };
      this.AC_SPEED(param.speed);
      this.AC_MODAL(options);
    },
    modalClose(param) {
      const options = {
        visible: false,
        ...param,
      };
      this.AC_SPEED(param.speed);
      this.AC_MODAL(options);
    },
    modalToggle(param) {
      const options = {
        ...param,
      };
      this.AC_SPEED(param.speed);
      this.AC_MODAL(options);
    },
  },
};
export { modal };
