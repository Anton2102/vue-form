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
* {
  box-sizing:border-box;
}

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
    min-width: 300px;
  }

  .input {
    // background-color: #f7f7f7;
    // border: 1px solid rgb(199, 199, 199);
    // padding: 0.3rem 0.5rem;
    // border-radius: 2px;
    margin: 10px;
    border: 2px solid #eee;
    border-radius:10px;
  }

  input[type=text] {
    padding:10px;
    border:0;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
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
