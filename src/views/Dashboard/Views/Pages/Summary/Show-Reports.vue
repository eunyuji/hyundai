<template>
  <div>
    <div class="page-header">
      <router-link :to="{ name: 'summary' }" class="prev">
        <span class="ti-angle-left"></span>
        <span class="blind">이전</span>
      </router-link>
      <h1 class="page-header-title">Show Reports</h1>
      <div class="btn-group btn-arg">
        <button type="button" class="btn btn-wd btn-md">Refresh</button>
        <router-link
          class="btn btn-info btn-fill btn-md"
          :to="{ name: 'Show-Reports' }"
        >
          <span class="ti-printer"></span>
          Print
        </router-link>
      </div>
    </div>
    <ul class="reports-view-list">
      <li v-for="(item, key) in reportList" :key="key">
        <strong class="title">
          <span class="ti-receipt"></span>
          <em>{{ item.title }}</em>
        </strong>
        <div class="reports-data">차트 데이타</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Show-Reports',
  data() {
    return {
      reportList: [
        {
          title: 'test1test1test1test1test1test1test1test1test1test1',
        },
        {
          title: 'test2',
        },
        {
          title: 'test3',
        },
        {
          title: 'test3',
        },
        {
          title: 'test3',
        },
        {
          title: 'test3',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.reports-view-list {
  margin-top: 20px;
  li {
    display: flex;
    padding: 30px 20px;
    & + li {
      border-top: 1px solid #ddd;
    }
  }
  .title {
    display: flex;
    align-items: flex-start;
    flex: 0 0 140px;
    width: 130px;
    margin-right: 20px;
    font-size: 12px;
    line-height: 17px;
    .ti-receipt {
      line-height: inherit;
      flex: 0 0 auto;
      margin-right: 8px;
    }
    em {
      flex: 1 1 auto;
      word-break: break-all;
    }
  }
  .reports-data {
    flex: 1 1 auto;
  }
}
</style>
