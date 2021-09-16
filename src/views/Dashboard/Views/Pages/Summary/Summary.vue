<template>
  <div>
    <h1 class="text-center">SUMMARY</h1>
    <div class="top-info-box pass">
      <strong class="result">
        <span class="ti-arrow-circle-down"></span>
        PASS
      </strong>
      <span class="result-num"><em class="ing">85</em> / <em>100</em></span>
    </div>
    <div class="btn-group btn-arg">
      <button type="button" class="btn btn-wd">Refresh</button>
      <button type="button" class="btn btn-info btn-fill">Show Reports</button>
    </div>
    <p class="card-title">Analysis data</p>
    <ul class="reports-list">
      <li v-for="(item, key) in reportList" :key="key">
        <strong class="title">
          <span class="ti-receipt"></span>
          {{ item.title }}
        </strong>
        <span class="reports-info">
          <span class="result-num"
            ><em class="ing"> {{ item.num }}</em> / <em>100</em></span
          >
          <strong class="result" v-if="item.pass">
            <span class="ti-arrow-circle-down"></span>
            PASS
          </strong>
          <strong class="result" v-else>
            <span class="ti-arrow-circle-down"></span>
            FAIL
          </strong>
        </span>
      </li>
    </ul>
    <router-link :to="{ name: 'Show-Reports' }">2ㅇ데소</router-link>
  </div>
</template>

<script>
export default {
  name: 'summary',
  data() {
    return {
      reportList: [
        {
          title: 'test1',
          pass: true,
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
  &.pass {
    .result {
      color: #58ba14;
    }
  }
}
.btn-arg {
  display: flex;
  justify-content: right;
  .btn + .btn {
    margin-left: 10px;
  }
}
.reports-list {
  display: flex;
  border-radius: 2px;
  border: solid 1px #c9c9c9;
  li {
    display: flex;
    align-items: center;
    flex: 0 0 50%;
    box-sizing: border-box;
    & + li {
      border-left: solid 1px #c9c9c9;
    }
    .title {
      font-size: 12px;
    }
    .reports-info {
      display: flex;
      margin-left: auto;
      align-items: center;
      .result-num {
      }
      .result {
        display: flex;
        width: 64px;
        height: 17px;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        background-color: #e3fcef;
      }
    }
  }
}
</style>
