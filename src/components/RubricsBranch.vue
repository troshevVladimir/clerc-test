<template>
  <li
    v-for="branch in tree"
    :key="branch.id"
    :id="branch.id"
    class="tree__branch"
  >
    <div class="tree__controls">
      <a :href="branch.url"
        >{{ branch.title }} (count: {{ branch.count }}, all:
        {{ totalBranchCount(branch) }})
      </a>
      <input
        type="checkbox"
        @input="select($event, branch.id)"
        :checked="getSelectedId.includes(branch.id)"
      />
      <button
        v-if="branch.children && branch.children.length"
        @click="toggle(branch.id)"
      >
        Свернуть/Развернуть
        <!-- Для динамического текста надо отдельный компонент кнопки -->
      </button>
    </div>
    <div v-show="getOpendId.includes(branch.id)">
      <ul>
        <rubrics-branch
          v-if="branch.children && branch.children.length > 4"
          :tree="branch.children"
        ></rubrics-branch>
        <RubricsLeaf v-else :items="branch.children"></RubricsLeaf>
      </ul>
    </div>
  </li>
</template>

<script>
import RubricsLeaf from "./RubricsLeaf.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "rubrics-branch",
  components: { RubricsLeaf },
  props: {
    tree: {
      type: Array,
    },
  },
  methods: {
    ...mapMutations({
      addOpendId: "RubricsTree/addOpendId",
      addSelectedId: "RubricsTree/addSelectedId",
      removeOpendId: "RubricsTree/removeOpendId",
      removeSelectedId: "RubricsTree/removeSelectedId",
    }),
    totalBranchCount(branch) {
      if (!this.tree.length) return;

      let count = 0;
      count += branch.count;

      function recursive(array) {
        for (let index = 0; index < array.length; index++) {
          const el = array[index];
          if ("children" in el && el.children.length > 0) {
            count += el.count;
            recursive(el.children);
          } else {
            count += el.count;
          }
        }
      }

      if (branch.children && branch.children.length) {
        recursive(branch.children);
      } else {
        count = branch.count;
      }

      branch.totalcount = count;

      return count;
    },
    select(e, id) {
      if (!e.target.checked) {
        this.removeSelectedId(id);
      } else {
        this.addSelectedId(id);
      }
    },
    toggle(id) {
      if (this.getOpendId.includes(id)) {
        this.removeOpendId(id);
        return;
      }
      this.addOpendId(id);
    },
  },
  computed: {
    ...mapGetters({
      getOpendId: "RubricsTree/getOpendId",
      getSelectedId: "RubricsTree/getSelectedId",
    }),
  },
};
</script>

<style>
.tree__controls {
  display: flex;
  align-items: center;
}
button {
  padding: 2px 10px;
}
</style>
