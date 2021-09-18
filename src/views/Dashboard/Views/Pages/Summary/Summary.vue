<template>
  <div>
    <h1 class="page-title">SUMMARY</h1>
    <div class="top-info-box" :class="{ fail: !pass }">
      <strong class="result">
        <template v-if="pass">
          <span class="ti-arrow-circle-down"></span>
          PASS
        </template>
        <template v-else>
          <i class="fa fa-times"></i>
          FAIL
        </template>
      </strong>
      <span class="result-num"><em class="ing">85</em> / <em>100</em></span>
    </div>
    <div class="btn-group btn-arg">
      <button type="button" class="btn btn-wd btn-md">Refresh</button>
      <router-link
        class="btn btn-info btn-fill btn-md"
        :to="{ name: 'Show-Reports' }"
      >
        Show Reports
      </router-link>
    </div>
    <p class="sub-title">Analysis data</p>
    <ul class="reports-list">
      <li v-for="(item, key) in reportList" :key="key">
        <strong class="title">
          <span class="ti-receipt"></span>
          <em>{{ item.title }}</em>
        </strong>
        <span class="reports-info">
          <span class="result-num">
            <em class="ing"> {{ item.num }}</em> / <em>100</em>
          </span>
          <strong class="result" v-if="item.pass"> PASS </strong>
          <strong class="result fail" v-else> FAIL </strong>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'summary',
  data() {
    return {
      pass: true,
      reportList: [
        {
          title: 'test1',
          pass: true,
          num: 85,
        },
        {
          title: 'test2',
          pass: false,
          num: 85,
        },
        {
          title: 'test3',
          pass: false,
          num: 85,
        },
        {
          title: 'test3',
          pass: false,
          num: 85,
        },
        {
          title: 'test3',
          pass: false,
          num: 85,
        },
        {
          title: 'test3',
          pass: false,
          num: 85,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.top-info-box {
  display: flex;
  margin: 50px 0 10px;
  padding: 30px;
  border-radius: 2px;
  border: solid 1px #e8e8e8;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  font-size: 18px;
  .result-num {
    margin-left: 12px;
    color: #92949b;
    em {
      font-style: normal;
    }
    .ing {
      font-weight: bold;
      color: #404146;
    }
  }
  .result {
    color: #58ba14;
  }
  &.fail {
    .result {
      color: #ba1414;
    }
  }
}
.reports-list {
  display: flex;
  margin-top: 10px;
  border-radius: 2px;
  border: solid 2px #c9c9c9;
  flex-wrap: wrap;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    flex: 0 0 50%;
    box-sizing: border-box;
    padding: 14px 15px;
    &:nth-child(2n + 1) {
      border-right: solid 1px #c9c9c9;
    }
    &:nth-child(n + 3) {
      border-top: solid 1px #c9c9c9;
    }
    .title {
      display: flex;
      margin-right: 20px;
      font-size: 12px;
      line-height: 17px;
      .ti-receipt {
        flex: 0 0 auto;
        line-height: inherit;
        margin-right: 8px;
      }
      em {
        flex: 1 1 auto;
        word-break: break-all;
        text-decoration: underline;
      }
    }
    .reports-info {
      display: flex;
      margin-left: auto;
      align-items: center;
      .result-num {
        display: flex;
        margin-right: 16px;
        font-size: 12px;
        color: #92949b;
        .ing {
          color: #1a1a1a;
          font-weight: bold;
        }
      }
      .result {
        display: flex;
        width: 64px;
        height: 17px;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        background-color: #e3fcef;
        font-weight: bold;
        font-size: 12px;
        color: #026545;
        &.fail {
          background: #fce3e3;
          color: #650202;
        }
      }
    }
  }
}
</style>
