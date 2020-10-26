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

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }

  #app {
    .container {
      border: 1px solid black;
      min-width: 300px;
    }
  }

.input {
  background-color: #f7f7f7;
  border: 1px solid rgb(199, 199, 199);
  padding: 0.3rem 0.5rem;
  border-radius: 2px;
}

.hasError label {
  color: red;
}

.button {
  background: #3ab409;
  padding: 0.5rem 1rem;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  border-radius: 2px;
  border-bottom: 2px solid #2e9106;
  transition: 0.3s;
}



</style>
