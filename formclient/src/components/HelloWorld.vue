<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <h2>Атрибуты формы:</h2>
    <input value="Фамилия">
    <br>
    <input value="Имя">
    <br>
    <input value="Отчество">
    <br>
    <input value="Дата рождения">
    <br>
    <input value="Номер телефона">
    <br>
    <input value="Пол">
    <br>
    <input value="Тут мультисектор">
    <br>
    <input value="Селектор">
    <br>
    <input value="Чекбокс">
    <hr>
    <h2>Адресс:</h2>
    <input value="Индекс">
    <br>
    <input value="Страна">
    <br>
    <input value="Область">
    <br>
    <input value="Город">
    <br>
    <input value="Улица">
    <br>
    <input value="Дом">
    <hr>
    <h2>Паспорт</h2>
    <input value="Тут селектор">
    <br>
    <input value="Серия">
    <br>
    <input value="Номер">
    <br>
    <input value="Кум выдан">
    <br>
    <input value="Дата выдачи">
  </div>
</template>

<script>
export default {
  name: 'formclient',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped land="scss">

</style>
