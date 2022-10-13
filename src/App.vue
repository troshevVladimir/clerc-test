<template>
  <LayoutHeader /><!-- был бы vue-router вынес бы в layout   -->
  <Subscriptions />
  <RubricsTree />
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue";
import RubricsTree from "./components/RubricsTree.vue";
import Subscriptions from "./components/SubscriptionsSection/SubscriptionsSection.vue";

export default {
  name: "App",
  components: {
    RubricsTree,
    Subscriptions,
    LayoutHeader,
  },
};
</script>

<style>
main {
  margin-top: 56px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media screen and (max-width: 600px) {
  .container {
    padding: 0;
  }
}
</style>
