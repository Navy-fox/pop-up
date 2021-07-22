<template>
  <div class="input-wrapper">
    <div class="input-wrapper__title">Ваша зарплата в месяц</div>
<!--    <input type="text" class="input">-->
    <slot></slot>
    <div class="input-wrapper__error" v-if="error">{{error}}</div>
  </div>
</template>

<script>

export default {
  name: "input-wrapper",
  props: {
    error: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  &__title {
    font-family: $font-medium;
    font-size: 14px;
    line-height: 24px;
    font-weight: bold;
  }
  &__error {
    font-size: 10px;
    line-height: 12px;
    color: $color-warning;
  }
}
.input {
  width: 288px;
  border: 1px solid #DFE3E6;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 10px;
  outline: none;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  cursor: pointer;
  &:blank {
    color: $color-idle;
  }
  color: $color-black;
  &:hover {
    border: 1px solid #000000;
  }
  &:focus {
    color: $color-black;
  }

  &:disabled {
    border: 1px solid #808080;
    color: $color-light;
    background: none;
  }
  &--error {
    border: 1px solid $color-warning;
    &:hover {
      border: 1px solid $color-warning;
    }
  }
}
</style>