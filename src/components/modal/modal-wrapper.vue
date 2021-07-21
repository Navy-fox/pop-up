<template>
  <portal :to="PORTALS.modal">
    <div class="modal-wrapper">
      <slot></slot>
    </div>
  </portal>
</template>

<script>
import {PORTALS} from "../../data/PORTALS";
export default {
  name: "modal-wrapper",
  data() {
    return {
      PORTALS
    }
  }
}
</script>

<style lang="scss">
.modal-wrapper{
  z-index: 10000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: $bg-color-grey;
  display: flex;
  justify-content: center;
  padding-top: 120px;
  overflow-y: auto;

}
</style>