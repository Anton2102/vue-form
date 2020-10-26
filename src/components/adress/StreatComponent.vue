<template>
  <div class="form-group" :class="{ 'hasError': v.$error }">
    <label class="mr-2 font-bold text-grey">Улица:</label>
    <input
      type="text"
      class="input"
      v-model="streat"
      placeholder=""
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
    streat: {
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
