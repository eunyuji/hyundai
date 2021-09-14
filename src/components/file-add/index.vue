<template>
  <div class="file-add">
    <span class="box">
      <input type="file" />
      <span class="btn btn-sm">파일선택</span>
      <p class="label"></p>
    </span>
    <button class="btn btn-primary btn-fill btn-wd">Load Data</button>
  </div>
</template>

<script>
export default {
  name: 'file-add',
};
</script>

<style scoped lang="scss">
.file-add {
  position: relative;
  display: flex;
  justify-content: space-between;
  .box {
    padding: 5px;
    flex: 1 1 auto;
    border: 1px solid gray;
    border-radius: 10px;
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;
    }
  }
  & > .btn {
    margin-left: 10px;
  }
}
</style>
