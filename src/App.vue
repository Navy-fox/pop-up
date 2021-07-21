<template>
  <div id="app">
    <portal-target :name="PORTALS.modal"></portal-target>
    <button class="btn btn--invert">
      Налоговый вычет
    </button>
    <modal-tax-deduction></modal-tax-deduction>
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
      PORTALS: PORTALS
    }
  },
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
