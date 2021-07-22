<template>
  <div id="app">
    <portal-target :name="PORTALS.modal"></portal-target>
    <button class="btn btn--invert" @click="modalTaxDeduction = true">
      Налоговый вычет
    </button>
    <modal-tax-deduction @close="sucessModalTaxDeduction" v-if="modalTaxDeduction"></modal-tax-deduction>
  </div>
</template>

<script>
import {PORTALS} from "./data/PORTALS";

import ModalTaxDeduction from "./components/modal/modal-tax-deduction";

export default {
  name: 'App',
  components: {ModalTaxDeduction},
  data() {
    return {
      PORTALS: PORTALS,
      modalTaxDeduction: false
    }
  },
  methods: {
    sucessModalTaxDeduction(val) {
      this.modalTaxDeduction = false
      if (val) {
        alert('send data')
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: $bg-color-red;
}
</style>
