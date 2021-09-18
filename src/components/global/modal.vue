<template>
  <portal to="modal" tag="div" :name="name">
    <transition @enter="modalEnter" @leave="modalLeave" :name="name">
      <div
        :class="classList"
        v-if="visibility"
        :key="visibility"
        :style="{ zIndex: order }"
      >
        <span ref="before" tabindex="0"></span>
        <div class="modal" ref="modal">
          <div
            class="close-drag"
            ref="drag"
            title="닫기"
            v-if="type === 'bottom'"
          ></div>
          <div class="modal-header" v-if="$slots.header">
            <slot name="header"></slot>
          </div>
          <div class="modal-content" v-if="$slots.content">
            <slot name="content"></slot>
          </div>
          <div class="modal-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
          <button type="button" class="modal-close" @click="closeEvent">
            <i class="fa fa-times"></i>
          </button>
        </div>
        <div
          class="dim"
          ref="dim"
          @click="closeEvent"
          v-show="type !== 'full'"
        ></div>
        <span ref="after" tabindex="0"></span>
      </div>
    </transition>
  </portal>
</template>
<script>
import { mapState } from 'vuex';
import { Cubic, gsap } from 'gsap/all';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default {
  name: 'modal',
  inheritAttrs: false,
  data() {
    return {
      dragData: {
        active: false,
        currentY: null,
        initialY: null,
        yOffset: 0,
      },
      isMobile: /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent),
    };
  },
  props: {
    name: String,
    type: {
      type: String,
      default: 'default',
      require: true,
      validator: function (value) {
        return ['default', 'full', 'bottom'].indexOf(value) !== -1;
      },
    },
    classes: Array,
    close: {
      type: Boolean,
      default: false,
    },
    dontClose: Boolean,
  },
  watch: {
    // 접근성 관련 focus 추가
    modalList() {
      if (this.isMobile) return;
      setTimeout(() => {
        const focusable = this.$refs.modal?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];
        lastFocusable.focus();
        this.$refs.after.addEventListener('focusin', () => {
          firstFocusable.focus();
        });
        this.$refs.before.addEventListener('focusin', () => {
          lastFocusable.focus();
        });
      }, 1);
    },
    visibility(open) {
      if (!open) {
        this.$emit('close');
        setTimeout(() => {
          this.$emit('closeEnd');
        }, this.speed * 1000);
      } else {
        this.$emit('open');
      }
      setTimeout(() => {
        if (this.type === 'bottom') {
          if (open) {
            window.addEventListener('touchstart', this.dragStart, {
              passive: false,
            });
            window.addEventListener('touchend', this.dragEnd, {
              passive: false,
            });
            window.addEventListener('touchmove', this.drag, { passive: false });
            window.addEventListener('mousedown', this.dragStart, {
              passive: false,
            });
            window.addEventListener('mouseup', this.dragEnd, {
              passive: false,
            });
            window.addEventListener('mousemove', this.drag, { passive: false });
          } else {
            window.removeEventListener('touchstart', this.dragStart, false);
            window.removeEventListener('touchend', this.dragEnd, false);
            window.removeEventListener('touchmove', this.drag, false);
            window.removeEventListener('mousedown', this.dragStart, false);
            window.removeEventListener('mouseup', this.dragEnd, false);
            window.removeEventListener('mousemove', this.drag, false);
          }
        }
      }, 1);
    },
  },
  computed: {
    ...mapState('modalStore', ['modalList', 'speed']),
    classList() {
      return [...(this.classes || ''), this.type || 'default', 'modal-item'];
    },
    visibility() {
      return this.modalList.some((el) => el.name === this.name);
    },
    order() {
      return 9999 + this.modalList.findIndex((el) => el.name === this.name);
    },
  },
  methods: {
    closeEvent() {
      if (this.dontClose) return;
      this.$emit('close', this.name);
      this.modalClose({ name: this.name });
    },
    dragStart(e) {
      if (e.target !== this.$refs.drag) return;
      if (e.type === 'touchstart') {
        this.dragData.initialY = e.touches[0].clientY - this.dragData.yOffset;
      } else {
        this.dragData.initialY = e.clientY - this.dragData.yOffset;
      }
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.dragData.active = true;
    },
    dragEnd(e) {
      if (!this.dragData.active) return;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.dragData.initialY = this.dragData.currentY;
      this.dragData.active = false;
      if (
        this.$refs.modal.clientHeight / 2 > this.dragData.currentY ||
        this.dontClose
      ) {
        const style = window.getComputedStyle(this.$refs.modal);
        // eslint-disable-next-line
        const matrix = new WebKitCSSMatrix(style.webkitTransform);
        gsap.fromTo(
          this.$refs.modal,
          this.speed,
          {
            y: `${(matrix.m42 / this.$refs.modal.clientHeight) * 100}%`,
          },
          {
            y: '0%',
            ease: Cubic.easeInOut,
            onComplete: () => {
              this.dragData = {
                active: false,
                currentY: null,
                initialY: null,
                yOffset: 0,
              };
            },
          }
        );
      } else {
        this.modalClose({ name: this.name });
      }
    },
    drag(e) {
      if (this.dragData.active) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.type === 'touchmove') {
          this.dragData.currentY =
            e.touches[0].clientY - this.dragData.initialY;
        } else {
          this.dragData.currentY = e.clientY - this.dragData.initialY;
        }
        this.dragData.currentY = Math.max(this.dragData.currentY, 0);
        this.dragData.yOffset = this.dragData.currentY;
        this.setTranslate(this.dragData.currentY);
      }
    },
    setTranslate(yPos) {
      this.$refs.modal.style.transform = `translate(0px, ${
        (yPos / this.$refs.modal.clientHeight) * 100
      }%)`;
    },
    modalEnter(el, done) {
      if (this.name === 'alert') {
        el.classList.add('alert');
      }
      disableBodyScroll(el.querySelector('.modal-content'));
      //console.log(el.querySelector('[data-autofocus]'));
      if (!el.querySelector('[data-autofocus]')) {
        document.activeElement.blur();
      } else {
        el.querySelector('[data-autofocus]').focus();
        document.querySelector('#fakeInput')?.remove();
      }

      if (this.type === 'bottom') {
        gsap.from(this.$refs.modal, {
          duration: this.speed,
          y: '100%',
          ease: Cubic.easeInOut,
        });
      } else {
        gsap.from(this.$refs.modal, {
          duration: this.speed,
          opacity: 0,
          ease: Cubic.easeInOut,
        });
      }
      gsap.from(this.$refs.dim, {
        duration: this.speed,
        opacity: 0,
        ease: Cubic.easeInOut,
        onComplete: () => {
          done();
        },
      });
    },
    modalLeave(el, done) {
      enableBodyScroll(el.querySelector('.modal-content'));
      if (this.type === 'bottom') {
        const style = window.getComputedStyle(this.$refs.modal);
        // eslint-disable-next-line
        const matrix = new WebKitCSSMatrix(style.webkitTransform);
        gsap.fromTo(
          this.$refs.modal,
          {
            y: `${(matrix.m42 / this.$refs.modal.clientHeight) * 100}%`,
          },
          {
            duration: this.speed,
            y: `100%`,
            ease: Cubic.easeInOut,
            onComplete: () => {
              this.dragData = {
                active: false,
                currentY: null,
                initialY: null,
                yOffset: 0,
              };
            },
          }
        );
      } else {
        gsap.to(this.$refs.modal, {
          duration: this.speed,
          opacity: 0,
          ease: Cubic.easeInOut,
        });
      }
      gsap.to(this.$refs.dim, {
        duration: this.speed,
        opacity: 0,
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
.modal-item {
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .modal {
    will-change: transform;
    z-index: 300;
    position: absolute;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;
    .modal-header {
      flex: 0 0 auto;
      padding: 0 20px;
      ::v-deep .modal-title {
        font-size: 20px;
      }
    }
    .modal-content {
      flex: 1 1 auto;
      padding: 0 20px;
      border: none;
      box-shadow: none;
      font-size: 14px;
      line-height: 20px;
      max-height: calc(100vh - 200px);
      overflow: auto;
      color: #000;
    }
    .modal-footer {
      flex: 0 0 auto;
      padding: 30px 20px 20px;
      box-sizing: border-box;
      ::v-deep .flex-btn-group {
        padding: 0;
      }
    }
    ::v-deep .modal-close {
      z-index: 10;
      position: absolute;
      top: 11px;
      right: 12px;
      width: 35px;
      height: 35px;
      padding: 0;
      i {
        font-size: 24px;
      }
    }
    .close-drag {
      height: 30px;
      margin-bottom: 10px;
      text-align: center;
      &:after {
        content: '';
        display: inline-block;
        width: 40px;
        height: 4px;
        border-radius: 2px;
        background-color: #ddd;
      }
    }
  }
  .dim {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 290;
    background-color: rgba(0, 0, 0, 0.4);
  }
  &.default {
    .modal {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 600px;
      width: calc(100% - 40px);
      /*min-height: 300px;*/
      padding-top: 10px;
      border-radius: 10px;
      .modal-header {
        padding-bottom: 10px;
      }
      .modal-content {
        font-size: 14px;
        line-height: 20px;
        color: #444;
      }
      .modal-footer {
      }
    }
  }
  &.bottom {
    .modal {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 20px 20px 0 0;
    }
    .modal-header {
      padding-bottom: 10px;
      & + .modal-content {
        ::v-deep .select-list {
          margin-top: 15px;
        }
      }
    }
    .modal-content {
    }
    .modal-footer {
      padding: 20px;
    }
  }
  &.full {
    .modal {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-height: none;
      transform: translate(0, 0);
    }
    .modal-header {
      padding: 16px 40px 16px 40px;
      ::v-deep .modal-title {
        font-size: 20px;
        text-align: center;
      }
    }
    .modal-content {
      max-height: none;
      overflow-x: hidden;
      padding-bottom: 40px;
    }
    .modal-footer {
    }
  }
  &.alert {
    z-index: 1000000 !important;
  }
}

.post-code {
  .modal-content {
    padding: 0 !important;
  }
}

.modal-item.webRTC {
  .modal {
    .modal-content {
      padding: 0 !important;
      overflow: hidden;
    }
  }
}
</style>
