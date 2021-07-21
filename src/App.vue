<template>
  <div id="app">
    <input-wrapper>
      <input type="text" placeholder="Введите данные" class="input" v-model="text">
    </input-wrapper>
    <check-box-wrapper>
      <input type="checkbox" disabled>
    </check-box-wrapper>
    <button class="btn-tags">
      Кнопка
    </button>
  </div>
</template>

<script>


import InputWrapper from "./components/input-wrapper";
import CheckBoxWrapper from "./components/check-box-wrapper";
export default {
  name: 'App',
  components: {CheckBoxWrapper, InputWrapper},
  data: () => ({
    text: ''
  })
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
}
</style>
