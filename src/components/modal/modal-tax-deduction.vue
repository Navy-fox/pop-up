<template>
  <modal-wrapper>
    <div class="modal-tax-deduction">
      <img src="../../assets/icon/close.svg" alt="" class="modal-tax-deduction__cross" @click="close">
      <p class="modal-tax-deduction__title">Налоговый вычет</p>
      <p class="modal-tax-deduction__subtitle">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13%
        от своего официального годового дохода.</p>
      <input-wrapper
        :error="($v.payday.$dirty && !$v.payday.required) ? 'Поле обязательно для заполнения' : ''"
      >
        <input
          class="input"
          placeholder="Введите данные"
          @keydown.enter="calcDeductionAmount"
          @input="inputMask"
          :class="($v.payday.$dirty && !$v.payday.required) ? 'input--error' : ''">
      </input-wrapper>
      <p class="btn-text modal-tax-deduction__btn-text" @click="calcDeductionAmount">Рассчитать</p>
      <div class="modal-tax-deduction__checkbox">
        <p class="modal-tax-deduction__text">Итого можете внести в качестве досрочных:</p>
        <check-box-wrapper
          v-for="(item, key) in deductionAmounts"
          :key="key"
          :text="`${numberWithCommas(item)} ${numRuble(item, ruble)} <span >${numPrerosition(key +1, preposition)} ${key + 1}${numSuffix(key + 1, suffix)} год</span>`"
        >
          <input type="checkbox">
        </check-box-wrapper>
      </div>
      <div class="modal-tax-deduction__tags-box">
        <p class="modal-tax-deduction__text">Что уменьшаем?</p>
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
      <button class="btn modal-tax-deduction__btn" @click="sendForm">Добавить</button>
    </div>
  </modal-wrapper>
</template>

<script>
import ModalWrapper from "./modal-wrapper";
import InputWrapper from "../input-wrapper";
import CheckBoxWrapper from "../check-box-wrapper";
import {required} from 'vuelidate/lib/validators'
import mixinModal from "../../mixins/mixinModal";

export default {
  name: "modal-tax-deduction",
  components: {CheckBoxWrapper, InputWrapper, ModalWrapper},
  mixins: [mixinModal],
  data() {
    return {
      tagValue: 'payment',
      payday: '',
      homePrice: 2_000_000,
      deductionAmounts: [],
      ruble: ['рубль', 'рубля', 'рублей'],
      preposition: ['в', 'во'],
      suffix: ['-ый', '-ой', '-ий'],
    }
  },
  watch: {},
  computed: {
    maxDeductionAmount() {
      const result = this.homePrice * 0.13
      return result > 260_000 ? 260_000 : result
    }
  },
  validations: {
    payday: {
      required
    }
  },
  methods: {
    inputMask() {
      const inputElement = document.querySelector('.input')

      const trimValue = String(inputElement.value).replace(/\s/g, '')
      const spaceValue = String(trimValue).replace(/(\d)(?=(\d{2})+(\D|$))/g, '$1 ')
      const rubleSymbol = spaceValue.replace(/₽/g, '').replace(/(.*)/, '$1 ₽')

      inputElement.value = rubleSymbol
    },

    setTagValue(str = '') {
      this.tagValue = str
    },
    calcDeductionAmount() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const arr = [];
        let maxPayment = this.payday * 12 * 0.13
        let deductionAmount = this.maxDeductionAmount
        for (let i = 0; i < Math.floor(deductionAmount / maxPayment); i++) {
          arr.push(maxPayment.toFixed(0))
        }
        arr.push((deductionAmount % maxPayment).toFixed(0))
        this.deductionAmounts = arr
      }
    },
    sendForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.confirm()
      }
    },
    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    numRuble(value, words) {
      value = value % 100
      let num = value % 10
      if (value >= 10 && value <= 20) return words[2]
      if (num > 1 && num < 5) return words[1]
      if (num === 1) return words[0]
      return words[2]
    },
    numPrerosition(value, words) {
      if (value === 2) return words [1]
      return words[0]
    },
    numSuffix(value, words) {
      let num = value % 10
      if (value >= 10 && value <= 20) return words[0]
      if (num === 1 || num === 4 || num === 5 || num === 9) return words[0]
      if (num === 2 || num === 6 || num === 7 || num === 8) return words[1]
      if (num === 3) return words[2]
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
  @media (max-width: $screen-tablet) {
    max-width: 450px;
  }
  @media (max-width: $screen-mobile) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
  }

  &__title {
    font-family: $font-medium;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 16px;
    @media (max-width: $screen-mobile) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__subtitle {
    font-size: 14px;
    line-height: 24px;
    color: $color-light;
    margin-bottom: 24px;
    @media (max-width: $screen-mobile) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__btn-text {
    margin-bottom: 16px;
    margin-top: 8px;
    font-weight: bold;
  }

  &__tags-box {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-bottom: 40px;
    margin-top: 8px;
    @media (max-width: $screen-mobile){
      flex-direction: column;
      gap: 24px;
      align-items: start;
    }
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
    @media (max-width: $screen-mobile) {
      width: 12px;
      height: 12px;
      right: 22px;
      top: 22px;
    }
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
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__text {
    font-weight: bold;
  }
}
</style>