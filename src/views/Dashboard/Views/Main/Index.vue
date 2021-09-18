<template>
  <div>
    <h1 class="page-title">SELECT DATA</h1>
    <p class="sub-title">Test List</p>
    <fileAdd />
    <ul class="file-list">
      <li
        v-for="(item, key) in fileList"
        :key="key"
        :class="{ active: checkedArry[key] }"
      >
        <p-checkbox v-model="checkedArry[key]" class="col-md-9">
          <span class="name">
            {{ item.name }}
          </span>
          <span class="date">
            {{ item.date }}
          </span>
        </p-checkbox>
        <div class="btn-box">
          <button type="button" class="txt-btn">Setting</button>
          <button type="button" class="del-btn">
            <i class="fa fa-times"></i>
            <span class="blind">삭제</span>
          </button>
        </div>
      </li>
    </ul>
    <div class="btn-group full-group">
      <button
        type="button"
        class="btn btn-info btn-lg"
        @click="showSwal('basic')"
      >
        빅데이터 분석
      </button>
      <button type="button" class="btn btn-info btn-lg">데이터 합치기</button>
    </div>
    <p class="sub-title">Select Report Type</p>
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
import swal from 'sweetalert2';
export default {
  name: 'Main',
  components: {
    fileAdd,
  },
  data() {
    return {
      checkedArry: [],
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
        {
          name: '…/data_02',
          file: 'data_02',
          date: '2021.01.01',
        },
        {
          name: '…/data_02',
          file: 'data_02',
          date: '2021.01.01',
        },
        {
          name: '…/data_02',
          file: 'data_02',
          date: '2021.01.01',
        },
        {
          name: '…/data_02',
          file: 'data_02',
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
      dataCheck: null,
      dataList: [
        {
          name: '데이터 변경',
        },
        {
          name: '데이터 변경2',
        },
      ],
    };
  },
  methods: {
    showSwal(type) {
      if (type === 'basic') {
        swal({
          title: `데이터 처리`,
          html:
            '<div class="modal-cont">' +
            '     <p class="desc">원하시는 기능을 선택해 주세요.</p>' +
            '      <ul class="data-check-list">' +
            '        <li>' +
            '         <div class="n-radio radio radio-neutral">' +
            '           <input id="radio1" type="radio" value="1" name="dateName">' +
            '           <label for="radio1">데이터 변경</label>' +
            '         </div>' +
            '       </li>' +
            '       <li>' +
            '        <div class="n-radio radio radio-neutral">' +
            '           <input id="radio2" type="radio" value="2" name="dateName">' +
            '           <label for="radio2">데이터 연산</label>' +
            '           </div>' +
            '        </li>' +
            '        <li>' +
            '         <div class="n-radio radio radio-neutral">' +
            '           <input id="radio3" type="radio" value="3" name="dateName">' +
            '           <label for="radio3">데이터 crop</label>' +
            '         </div>' +
            '       </li>' +
            '        <li>' +
            '         <div class="n-radio radio radio-neutral">' +
            '           <input id="radio4" type="radio" value="4" name="dateName">' +
            '           <label for="radio4">데이터 Export</label>' +
            '         </div>' +
            '       </li>' +
            '        <li>' +
            '         <div class="n-radio radio radio-neutral">' +
            '           <input id="radio5" type="radio" value="5" name="dateName">' +
            '           <label for="radio5">분석 데이터 매칭</label>' +
            '         </div>' +
            '       </li>' +
            '      </ul>' +
            '    </div>',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success btn-fill',
          cancelButtonClass: 'btn btn-danger btn-fill',
          buttonsStyling: false,
        })
          .then((result) => {
            console.log(result, 'result');
            let dataList = document.getElementsByName('dateName');
            dataList.forEach((el) => {
              if (el.checked) {
                this.dataCheck = el.value;
              }
            });
          })
          .catch(swal.noop);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.file-list {
  max-height: 350px;
  overflow: auto;
  margin: 10px 0 0;
  padding: 0;
  border: 1px solid #c9c9c9;
  border-radius: 2px;
  li {
    display: flex;
    justify-content: space-between;
    padding: 14px 17px;
    .checkbox {
      flex: 1 1 auto;
      display: block;
      margin: 0;
      .date {
        margin-left: 15px;
        font-size: 12px;
        color: #6d7580;
      }
    }
    .btn-box {
      display: flex;
      align-items: center;
      .btn {
        margin: 0 5px;
      }
    }
    & + li {
      border-top: 1px solid #e8e8e8;
    }
    &.active {
      background: #e7f0f3;
    }
  }
}
.full-group {
  display: flex;
  width: 100%;
  margin-top: 10px;

  .btn {
    flex: 1 1 calc(50% - 5px);
    & + .btn {
      margin-left: 10px;
    }
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
    height: 94px;
    padding: 17px 20px 20px;
    border-radius: 2px;
    border: solid 1px #d4d4d4;
    background: #fafafa;
    color: #404146;
    span {
      display: block;
      &.tit {
        font-weight: bold;
      }
    }
    &:hover {
      background: #e4e4e4;
    }
  }
  .ti-angle-right {
    position: absolute;
    top: 19px;
    right: 20px;
  }
}
</style>
