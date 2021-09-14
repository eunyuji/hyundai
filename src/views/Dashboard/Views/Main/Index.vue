<template>
  <div>
    <h1 class="text-center">SELECT DATA</h1>
    <p class="category">Test List</p>
    <fileAdd />
    <ul class="file-list">
      <li v-for="(item, key) in fileList" :key="key">
        <span class="name">
          {{ item }}
        </span>
        <div class="btn-box">
          <button type="button" class="btn btn-sm btn-primary btn-fill btn-wd">
            Select Data
          </button>
          <button type="button" class="btn btn-sm btn-primary btn-fill btn-wd">
            설정
          </button>
          <button type="button">삭제</button>
        </div>
      </li>
    </ul>
    <div class="btn-group full-group">
      <button type="button" class="btn btn-default btn-lg">
        빅데이터 분석
      </button>
      <button type="button" class="btn btn-default btn-lg">
        데이터 합치기
      </button>
    </div>
    <p class="category">Select Report Type</p>
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
    };
  },
};
</script>
<style scoped lang="scss">
.category {
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
    .btn-group {
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
</style>
