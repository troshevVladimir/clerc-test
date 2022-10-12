<template>
  <li
    div
    v-for="item in items"
    :key="item.id"
    :id="item.id"
    class="tree__branch"
  >
    <a class="tree__link" :href="item.url">
      {{ item.title }} (count: {{ item.count }}
    </a>
    <input
      type="checkbox"
      @input="select($event, item.id)"
      :checked="getSelectedId.includes(item.id)"
    />
  </li>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "rubrics-leaf",
  components: {},
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      opendIDArray: [],
      selectedIDArray: [],
    };
  },
  methods: {
    ...mapMutations({
      addSelectedId: "RubricsTree/addSelectedId",
      removeSelectedId: "RubricsTree/removeSelectedId",
    }),
    select(e, id) {
      if (!e.target.checked) {
        this.removeSelectedId(id);
      } else {
        this.addSelectedId(id);
      }
    },
  },
  computed: {
    ...mapGetters({
      getSelectedId: "RubricsTree/getSelectedId",
    }),
  },
};
</script>

<style></style>
