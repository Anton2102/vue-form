<template>
  <div class="form-group" :class="{ 'hasError': v.$error }">

  <label>Лечащий врач: </label>
  <select class="input" v-model="doctor" @input="v.$touch()">
    <option>Иванов</option>
    <option>Захаров</option>
    <option>Чернышев</option>
  </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    doctor: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
