<template>
  <div class="content">
    <div class="container-fluid">
      <div class="max-cont">
        <ul class="location">
          <li>
            <router-link to="/">
              <span class="ti-home"></span>Home
            </router-link>
          </li>
          <li v-for="(item, key) in depthList" :key="key">
            <router-link :to="{ name: item.name }"
              >> {{ item.name }}</router-link
            >
          </li>
        </ul>
        <div class="card cont">
          <transition name="fade" mode="out-in">
            <!-- your content here -->
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      depthList: [],
    };
  },
  watch: {
    $route() {
      this.depthFn();
    },
  },
  created() {
    this.depthFn();
  },
  methods: {
    depthFn() {
      this.depthList = [];
      console.log(this.$route.path);
      const path = this.$route.path;
      const pathArr = path.split('/');
      console.log(pathArr);
      pathArr.forEach((el, index) => {
        if (el.length > 0) {
          this.depthList.push({
            depth: index,
            name: el,
          });
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.location {
  display: flex;
  margin: 0 0 10px 0;
  padding: 0;
  li {
    display: block;
    list-style-type: none;
  }
}
.max-cont {
  max-width: 1280px;
  min-width: 360px;
  margin: 0 auto;
}
.cont {
  background: #fff;

  box-sizing: border-box;
  padding: 30px;
}
</style>
