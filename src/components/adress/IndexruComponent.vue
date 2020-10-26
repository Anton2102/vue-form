<template>
  <div class="form-group" :class="{ 'hasError': v.$error }">
    <label class="mr-2 font-bold text-grey">Индекс:</label>
    <input
      type="text"
      class="input"
      v-model="indexru"
      @input="v.$touch()">
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
    indexru: {
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
