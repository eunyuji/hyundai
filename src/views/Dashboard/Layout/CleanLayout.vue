<template>
  <div class="wrapper">
    <!--    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">
      <user-menu></user-menu>
      <form
        class="
          navbar-form navbar-left navbar-search-form navbar-search-form-mobile
        "
        role="search"
      >
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-search"></i></span>
          <input
            type="text"
            value=""
            class="form-control"
            placeholder="Search..."
          />
        </div>
      </form>
      <mobile-menu></mobile-menu>
    </side-bar>-->
    <div class="main-panel clean-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from './CleanTopNavbar.vue';
import ContentFooter from './CleanContentFooter.vue';
import DashboardContent from './Content.vue';

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.clean-panel {
  width: 100%;
}
</style>
