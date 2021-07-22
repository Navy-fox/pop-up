<template>
  <label class="check-box-wrapper">
    <slot></slot>
    <!--    <input type="checkbox">-->
    <span class="check-box-wrapper__box"></span>
    <span>78 000 рублей в 1-ый год</span>
  </label>
</template>

<script>
export default {
  name: "check-box-wrapper",
}
</script>

<style lang="scss">
.check-box-wrapper {
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  padding-bottom: 16px;
  border-bottom: 1px solid #DFE3E6;
  input[type=checkbox] {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    &:checked + .check-box-wrapper__box {
      position: relative;
      border: hidden;
      background: $button-color-red ;
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../assets/icon/check.svg") center no-repeat;
      }

    }
    &:checked:disabled  + .check-box-wrapper__box {
      background: #BEC5CC;
    }
    &:disabled + .check-box-wrapper__box {
      border: 1px solid #BEC5CC;
    }

    &:hover + .check-box-wrapper__box {
      border: 1px solid #000000;
    }
    &:hover:disabled + .check-box-wrapper__box {
      border: 1px solid #BEC5CC;
      cursor: not-allowed;
    }

  }
  &__box {
    width: 20px;
    height: 20px;
    border: 1px solid #DFE3E6;
    border-radius: 6px;
  }
}
</style>