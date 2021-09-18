<template>
  <span class="tooltip-wrap">
    <button
      type="button"
      class="txt-btn"
      v-if="$slots.btn"
      @click="tooltipOpen"
    >
      <slot name="btn"></slot>
    </button>
    <transition @enter="tooltipEnter" @leave="tooltipLeave" v-if="visible">
      <span class="tooltip-cont" v-if="$slots.cont" ref="tooltipCont">
        <slot name="cont"></slot>
      </span>
    </transition>
  </span>
</template>
<script>
import { Cubic, gsap } from 'gsap/all';

export default {
  name: 'tootip',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    tooltipOpen() {
      this.visible = !this.visible;
    },
    tooltipEnter(el, done) {
      gsap.to(this.$refs.tooltipCont, {
        duration: 3,
        display: 'block',
        opacity: 1,
        ease: Cubic.easeInOut,
        onComplete: () => {
          done();
        },
      });
    },
    tooltipLeave(el, done) {
      gsap.to(this.$refs.tooltipCont, {
        duration: 0.3,
        display: 'block',
        opacity: 1,
        ease: Cubic.easeInOut,
        onComplete: () => {
          done();
        },
      });
    },
  },
};
</script>
<style scoped lang="scss">
.tooltip-wrap {
  position: relative;
  .tooltip-cont {
    z-index: 2;
    position: absolute;
    top: 19px;
    left: 0;
    background: #fff;
    ::v-deep .btn {
      margin: 0 !important;
      border-radius: 0 !important;
    }
  }
}
</style>
