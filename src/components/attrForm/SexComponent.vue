<template>
  <div class="form-group" :class="{ 'hasError': v.$error }">
    <input type="radio" name="sex" id="one" value="Один">
    <label for="one">муж</label>
    <input type="radio" name="sex" id="two" value="Два">
    <label for="two">жен</label>
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
    sex: {
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
