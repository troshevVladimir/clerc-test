<template>
  <div class="container">
    <RubricsTree />
  </div>
</template>

<script>
import RubricsTree from "./components/RubricsTree.vue";

export default {
  name: "App",
  components: {
    RubricsTree,
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
