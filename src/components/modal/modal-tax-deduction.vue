<template>
  <modal-wrapper>
    <div class="modal-tax-deduction">
      <img src="../../assets/icon/close.svg" alt="" class="modal-tax-deduction__cross">
      <p class="modal-tax-deduction__title">Налоговый вычет</p>
      <p class="modal-tax-deduction__subtitle">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13%
        от своего официального годового дохода.</p>
      <input-wrapper>
        <input type="text" class="input" placeholder="Введите данные">
      </input-wrapper>
      <p class="btn-text">Рассчитать</p>
      <div class="modal-tax-deduction__tags-box">
        <p>Что уменьшаем?</p>
        <div class="modal-tax-deduction__tags">
          <button class="btn-tags btn-tags--active">Платёж</button>
          <button class="btn-tags">Срок</button>
        </div>
      </div>
      <button class="btn modal-tax-deduction__btn">Добавить</button>
    </div>
  </modal-wrapper>
</template>

<script>
import ModalWrapper from "./modal-wrapper";
import InputWrapper from "../input-wrapper";

export default {
  name: "modal-tax-deduction",
  components: {InputWrapper, ModalWrapper}
}
</script>

<style lang="scss">
.modal-tax-deduction {
  max-width: 550px;
  max-height: 500px;
  background-color: $pop-up-color;
  border-radius: 30px;
  padding: 32px;
  position: relative;

  &__title {
    font-family: $font-medium;
    font-size: 28px;
    line-height: 40px;
  }
  &__subtitle {
    font-size: 14px;
    line-height: 24px;
    color: $color-light;
    padding: 16px 0;
  }
  &__tags-box {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
  &__tags {
    display: flex;
    gap: 16px;
  }
  &__cross {
    position: absolute;
    cursor: pointer;
    right: 27px;
    top: 27px;
  }
  &__btn {
    width: 100%;
    display: block;
  }
}
</style>