<template>
  <div v-for="branch in tree" :key="branch.id">
    <a class="tree__link" :href="branch.url"
      >{{ branch.title }} (count: {{ branch.count }}, all:
      {{ totalBranchCount(branch.id) }})
    </a>
    <input
      type="checkbox"
      @input="select(branch.id)"
      :checked="selectedIDArray.includes(branch.id)"
    />
    <button
      v-if="branch.children && branch.children.length"
      @click="toggle(branch.id)"
    >
      Развернуть
    </button>
    <div class="sub-tree__links" v-if="opendIDArray.includes(branch.id)">
      <div v-for="children in branch.children" :key="children.id">
        <a class="sub-tree__link" :href="children.url">
          {{ children.title }} (count: {{ children.count }})
        </a>
        <input
          type="checkbox"
          @input="select(children.id)"
          :checked="selectedIDArray.includes(children.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rubrics-tree",
  components: {},
  props: {
    tree: {
      type: Array,
      required: true,
    },
  },
  methods: {
    totalBranchCount(id) {
      if (!this.tree.length) return;

      let count = 0;
      const branch = this.tree.find((el) => {
        return el.id === id;
      });

      if (!branch) console.log(id);

      count += branch.count;

      if (!branch.children.length) return count;

      branch.children.forEach((cihild) => {
        count += cihild.count;
      });

      return count;
    },
    select(id) {
      if (this.selectedIDArray.includes(id)) {
        const arrayId = this.selectedIDArray.findIndex((el) => el === id);
        this.selectedIDArray.splice(arrayId, 1);
      } else {
        this.selectedIDArray.push(id);
      }
    },
  },
};
</script>

<style></style>
