<template>
  <div class="input-wrapper">
    <div class="input-wrapper__title">Ваша зарплата в месяц</div>
    <slot></slot>
    <div class="input-wrapper__error">Поле обязательно для заполнения</div>
  </div>
</template>

<script>
export default {
  name: "input-wrapper"
}
</script>

<style lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;
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
  cursor: pointer;
  &:blank {
    color: $font-color-idle;
  }
  color: $font-color-black;
  &:hover {
    border: 1px solid #000000;
  }
  &:focus {
    color: $font-color-black;
  }

  &:disabled {
    border: 1px solid #808080;
    color: $font-color-light;
    background: none;
  }
  &--error {
    border: 1px solid $color-warning;
  }
}
</style>