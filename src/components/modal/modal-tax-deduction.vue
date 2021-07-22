<template>
  <modal-wrapper>
    <div class="modal-tax-deduction">
      <img src="../../assets/icon/close.svg" alt="" class="modal-tax-deduction__cross">
      <p class="modal-tax-deduction__title">Налоговый вычет</p>
      <p class="modal-tax-deduction__subtitle">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13%
        от своего официального годового дохода.</p>
      <input-wrapper
        :error="($v.payday.$dirty && !$v.payday.required) ? 'Поле обязательно для заполнения' : ''"
        >
        <input type="number" class="input" placeholder="Введите данные" v-model.number="payday" @input="$v.$touch()"
               :class="($v.payday.$dirty && !$v.payday.required) ? 'input--error' : ''">
      </input-wrapper>
      <p class="btn-text modal-tax-deduction__btn-text">Рассчитать</p>
      <div class="modal-tax-deduction__checkbox">
        <p>Итого можете внести в качестве досрочных:</p>
        <check-box-wrapper><input type="checkbox"></check-box-wrapper>
      </div>
      <div class="modal-tax-deduction__tags-box">
        <p>Что уменьшаем?</p>
        <div class="modal-tax-deduction__tags">
          <button
            :class="{'btn-tags--active': tagValue === 'payment'}"
            class="btn-tags"
            @click="setTagValue('payment')">Платёж
          </button>
          <button
            :class="{'btn-tags--active': tagValue === 'period'}"
            class=" btn-tags"
            @click="setTagValue('period')">Срок
          </button>
        </div>
      </div>
      <button class="btn modal-tax-deduction__btn">Добавить</button>
    </div>
  </modal-wrapper>
</template>

<script>
import ModalWrapper from "./modal-wrapper";
import InputWrapper from "../input-wrapper";
import CheckBoxWrapper from "../check-box-wrapper";
import {required} from 'vuelidate/lib/validators'

export default {
  name: "modal-tax-deduction",
  components: {CheckBoxWrapper, InputWrapper, ModalWrapper},
  data() {
    return {
      tagValue: 'payment',
      payday: ''
    }
  },
  validations: {
    payday: {
      required
    }
  },
  methods: {
    setTagValue(str = '') {
      this.tagValue = str
    }
  }
}
</script>

<style lang="scss">
.modal-tax-deduction {
  max-width: 550px;
  background-color: $pop-up-color;
  border-radius: 30px;
  padding: 32px;
  position: relative;

  &__title {
    font-family: $font-medium;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 16px;
  }

  &__subtitle {
    font-size: 14px;
    line-height: 24px;
    color: $color-light;
    margin-bottom: 24px;
  }

  &__btn-text {
    margin-bottom: 16px;
    margin-top: 8px;
  }

  &__tags-box {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-bottom: 40px;
    margin-top: 8px;
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

  &__checkbox {
    font-family: $font-medium;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 20px;
  }
}
</style>