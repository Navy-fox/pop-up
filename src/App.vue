<template>
  <div id="app">
    <button class="btn btn--invert">
      Налоговый вычет
    </button>
  </div>
</template>

<script>



export default {
  name: 'App',
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
