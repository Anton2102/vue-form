<template>
  <div class="component-container">
    <FormClient msg="Форма создания Клиента"/>
  </div>
</template>

<script>
import FormClient from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    FormClient
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.component-container {
  margin: 0 10px 20px 10px;
  padding: 20px;
  background: #FFF;
  border-radius: 4px;
  border: 1px solid #EBEBEB;
  min-width: 300px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  flex: 1 0 48%;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
}
</style>
