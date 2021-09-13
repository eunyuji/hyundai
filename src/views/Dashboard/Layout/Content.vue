<template>
  <div class="content">
    <div class="container-fluid">
      <ul class="location">
        <li>Home</li>
        <li>/ {{ $route.name }}</li>
      </ul>
      <div class="cont">
        <transition name="fade" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
  max-width: 930px;
  margin: 0 auto;
  padding: 0;
  li {
    display: block;
    list-style-type: none;
  }
}
.cont {
  background: #fff;
  max-width: 930px;
  min-width: 360px;
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;
}
</style>
