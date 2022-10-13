<template>
  <div class="checkbox-wrapper">
    <label
      class="checkbox"
      :class="[
        `checkbox--size-${this.size}`,
        { 'checkbox--active': this.localValue },
      ]"
    >
      <input type="checkbox" v-model="localValue" />
      <div class="checkbox__toggler"></div>
    </label>
    <div class="checkbox__label"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (value) => ["default", "small"].includes(value),
    },
  },
  data() {
    return {
      localValue: this.modelValue,
    };
  },
  watch: {
    localValue(val) {
      this.$emit("change", val);
      this.$emit("update:modelValue", val);
    },
  },
};
</script>

<style>
.checkbox-wrapper {
  display: flex;
  align-items: center;
}
.checkbox {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 100px;
  background-color: #dcdcdc;
  transition: all ease 0.2s;
  cursor: pointer;
}

.checkbox--size-small {
  width: 32px;
  height: 16px;
}

.checkbox--size-small .checkbox__toggler {
  width: 14px;
  height: 14px;
}

.checkbox--active {
  background-color: #316fee;
}

.checkbox input {
  visibility: hidden;
}

.checkbox__label {
  left: 100%;
  margin-left: 8px;
}

input:active + .checkbox__toggler {
  background-color: #999;
}

.checkbox__toggler {
  position: absolute;
  top: 50%;
  left: 1px;
  transform: translate(0, -50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
}

.checkbox--active .checkbox__toggler {
  left: initial;
  right: 1px;
  transform: translate(0, -50%);
}
</style>
