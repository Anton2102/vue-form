<template>
  <div class="form-group" :class="{ 'hasError': v.$error }">
    <label for="one">Группа клиентов:*</label>
      <br>
      <select v-model="groupclient" class="input" @input="v.$touch()">
        <option>VIP</option>
        <option>Проблемные</option>
        <option>ОМС</option>
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
    groupclient: {
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
