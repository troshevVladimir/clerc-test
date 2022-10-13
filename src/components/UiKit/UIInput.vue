<template>
  <input
    type="text"
    :placeholder="placeholder"
    v-model="localValue"
    :name="this.name"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  data() {
    return {
      localValue: null,
    };
  },
  watch: {
    localValue(val) {
      this.$emit("update:modelValue", val);
      // this.$emit("input", val);
    },
  },
  created() {
    this.localValue = this.value;
  },
};
</script>

<style scoped>
input {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  padding: 16px;
  border: none;
  width: 100%;
}

input:focus-visible {
  outline: rgba(49, 112, 238, 0.5) auto 1px;
}
</style>
