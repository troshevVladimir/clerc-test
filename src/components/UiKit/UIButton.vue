<template>
  <button class="button" @click="clickHandler">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      this.$emit("clicked");
    },
  },
};
</script>
<style>
.button {
  position: relative;
  padding: 16px 32px;
  background-color: #316fee;
  border-radius: 100px;
  border: none;
  transition: background-color ease 0.2s;
  cursor: pointer;
  min-height: 56px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  color: #fff;
}

.button:hover {
  background-color: #1d4699;
}

@media screen and (max-width: 600px) {
  .button {
    padding: 16px 28px;
  }
}
</style>
