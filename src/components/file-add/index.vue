<template>
  <div class="file-add">
    <span class="box">
      <input type="file" />
      <span class="file-btn">파일선택</span>
      <p class="label-txt">sadada</p>
    </span>
    <button class="btn btn-info btn-fill btn-wd">Load Data</button>
  </div>
</template>

<script>
export default {
  name: 'file-add',
};
</script>

<style scoped lang="scss">
.file-add {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  .box {
    position: relative;
    display: flex;
    padding: 4px 10px;
    flex: 1 1 auto;
    align-items: center;
    border: 1px solid #c9c9c9;
    border-radius: 2px;
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;
    }
    .file-btn {
      margin-right: 20px;
      padding: 5px 20px;
      border-radius: 2px;
      border: solid 1px #ddd;
      background-color: #f4f4f4;
    }
    .label-txt {
      margin: 0;
    }
  }
  & > .btn {
    display: flex;
    height: 50px;
    align-items: center;
    margin-left: 10px;
    &:before {
      content: '';
      display: inline-block;
      width: 26px;
      height: 26px;
      margin-right: 4px;
      background: url(../../assets/icon/group-2-copy-6.svg) no-repeat;
    }
  }
}
</style>
