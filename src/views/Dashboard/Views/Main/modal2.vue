<template>
  <modal :name="name" :type="type">
    <template v-slot:header><h2 class="modal-title">주소검색22</h2></template>
    <template v-slot:content> 모달입니다 </template>
    <template v-slot:footer>
      <div>
        <button type="button" class="btn btn-md btn-fill btn-wd">취소</button>
        <button type="button" class="btn btn-md btn-info btn-fill btn-wd">
          다음
        </button>
      </div>
    </template>
  </modal>
</template>

<script>
export default {
  name: 'modal-address',
  props: ['name', 'type', 'address'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.search-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 56px;
  margin: 0 20px;
  border-bottom: 1px solid #ddd;
  .address-auto {
    z-index: 2;
    position: absolute;
    top: 62px;
    left: 6px;
    width: calc(100% - 14px);
    padding: 10px;
    box-sizing: border-box;
    max-height: 200px;
    overflow: auto;
    background: #fff;
    border: 1px solid #eee;
    border-width: 0 1px 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.04);
    li {
      padding: 10px 0;
      button {
        width: 100%;
        text-align: left;
      }
    }
  }
}
.bullet-list {
  margin-top: 20px;
}
.load-more-btn {
  border: 1px solid #000;
  padding: 20px;
  text-align: center;
  background: #42b983;
  cursor: pointer;
}
.addr-list {
  padding-top: 139px;
  .addr-item {
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    .postNo {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    }
    .item {
      display: flex;
      width: 100%;
      margin-top: 7px;
      .key {
        flex: 0 0 44px;
        height: 20px;
        margin-right: 5px;
        border-radius: 4px;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        background: #eee;
        color: #444;
        font-weight: 500;
      }
      .value {
        flex: 1 1 auto;
        text-align: left;
        word-break: keep-all;
      }
      &.road {
        margin-top: 10px;
        .key {
          background: red;
          color: #047099;
        }
      }
    }
  }
}
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  color: #ddd;
}
</style>
