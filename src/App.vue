<template>
  <div id="app">
    <h1>Форма создания Клиента</h1>
    <div class="container">
      <form-component />
    </div>
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";

export default {
  name: "App",
  components: {
    FormComponent
  }
};
</script>

<style land="scss">
@import './variables.scss';
</style>
