<template>
  <div>
    <h1 class="text-center">SELECT DATA</h1>
    <p class="card-title">Test List</p>
    <fileAdd />
    <ul class="file-list">
      <li v-for="(item, key) in fileList" :key="key">
        <span class="name">
          {{ item }}
        </span>
        <div class="btn-box">
          <button type="button" class="btn btn-sm btn-wd">Select Data</button>
          <button type="button" class="btn btn-sm btn-info btn-fill">
            <span class="ti-settings"></span>
            <span class="blind">설정</span>
          </button>
          <button type="button" class="btn btn-sm btn-info btn-fill">
            <i class="fa fa-times"></i>
            <span class="blind">삭제</span>
          </button>
        </div>
      </li>
    </ul>
    <div class="btn-group full-group">
      <button type="button" class="btn btn-info btn-lg">빅데이터 분석</button>
      <button type="button" class="btn btn-info btn-lg">데이터 합치기</button>
    </div>
    <p class="card-title">Select Report Type</p>
    <ul class="check-list">
      <li v-for="(item, key) in checkList" :key="key">
        <router-link :to="{ name: 'summary' }">
          <span class="tit">{{ item.title }}</span>
          <span class="txt">{{ item.txt }}</span>
          <span class="ti-angle-right"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import fileAdd from '@/components/file-add/index.vue';
export default {
  name: 'Main',
  components: {
    fileAdd,
  },
  data() {
    return {
      fileList: [
        {
          name: '…/data_01',
          file: 'data_01',
          date: '2021.01.01',
        },
        {
          name: '…/data_02',
          file: 'data_02',
          date: '2021.01.01',
        },
      ],
      checkList: [
        {
          title: 'ENCAP',
          txt: '(AEB) Car-to-Car',
        },
        {
          title: 'ENCAP',
          txt: '(AEB) VRU',
        },
        {
          title: 'ENCAP',
          txt: '(AEB) VRU',
        },
        {
          title: 'ENCAP',
          txt: '(AEB) VRU',
        },
        {
          title: 'ENCAP',
          txt: '(AEB) VRU',
        },
        {
          title: 'ENCAP',
          txt: '(AEB) VRU',
        },
        {
          title: 'ENCAP',
          txt: '(AEB) VRU',
        },
        {
          title: 'ENCAP',
          txt: '(AEB) VRU',
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.card-title {
  margin-top: 40px;
}
.file-list {
  margin: 10px 0 0;
  padding: 0;
  border: 1px solid gray;
  border-radius: 3px;
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .btn-box {
      .btn {
        margin: 0 5px;
      }
    }
  }
}
.full-group {
  display: flex;
  width: 100%;
  margin-top: 10px;

  .btn {
    flex: 1 1 50%;
  }
}
.check-list {
  display: flex;
  margin: 20px -5px 0;
  padding: 0;
  flex-wrap: wrap;
  li {
    flex: 0 0 calc(33.3% - 10px);
    margin: 0 5px;
    list-style: none;
    &:nth-child(n + 4) {
      margin-top: 10px;
    }
  }
  a {
    position: relative;
    display: block;
    height: 76px;
    padding: 17px 20px 20px;
    border-radius: 2px;
    border: solid 1px #d4d4d4;
    background-color: #e4e4e4;
    color: #404146;
    .ti-angle-right {
      position: absolute;
      top: 19px;
      right: 20px;
    }
  }
}
</style>
