<template>
  <div class="form-group" :class="{ hasError: v.$error }">
    <label class="mr-2 font-bold text-grey">Отчество: </label>
    <input
      type="text"
      class="input"
      v-model="sursurname"
    />
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
    sursurname: {
      get() {
        return this.value;
      },
      set(value) {
        this.v.$touch();
        this.$emit("input", value);
      }
    }
  }
};
</script>
