<template>
  <section>
    <div class="container">
      <strong class="total-count">{{ totalCount }}</strong>
      <span>Разрешить пустые</span>
      <ui-checkbox size="small" type="checkbox" v-model="allowEmpty" /><br />
      <button v-if="tree && tree.length" @click="toggleAll()">
        {{ btnText }}
      </button>
      <ul class="tree">
        <div class="loader" v-if="loading">Загрузка...</div>
        <template v-if="allShow">
          <RubricsBranch :tree="tree" />
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import RubricsBranch from "./RubricsBranch.vue";

export default {
  name: "rubrics-tree",
  components: { RubricsBranch },
  data() {
    return {
      loading: false,
      tree: [],
      allShow: true,
      opendIDArray: [],
      selectedIDArray: [],
      allowEmpty: false,
    };
  },
  methods: {
    ...mapActions({
      fetchTree: "RubricsTree/fetchTree",
    }),
    ...mapMutations({
      addSelectedId: "RubricsTree/addSelectedId",
    }),
    toggleAll() {
      this.allShow = !this.allShow;
      this.opendIDArray = [];
    },
  },
  watch: {
    async allowEmpty(value) {
      this.loading = true;
      value ? await this.fetchTree({ allowEmpty: 1 }) : await this.fetchTree();
      this.loading = false;
    },
  },
  computed: {
    ...mapGetters({
      getSelectedId: "RubricsTree/getSelectedId",
      getTree: "RubricsTree/getTree",
    }),
    btnText() {
      return this.allShow ? "Свернуть всё" : "Развернуть всё";
    },
    totalCount() {
      if (!this.tree?.length) return;
      let count = 0;

      function recursive(that, array) {
        for (let index = 0; index < array.length; index++) {
          const el = array[index];

          if ("children" in el && el.children.length > 0) {
            if (that.getSelectedId.includes(el.id)) {
              count += el.totalcount;
            } else {
              recursive(that, el.children);
            }
          } else if (that.getSelectedId.includes(el.id)) {
            count += el.count;
          }
        }
      }

      recursive(this, this.tree);

      return count;
    },
  },
  async created() {
    this.loading = true;
    await this.fetchTree();
    this.loading = false;
    this.tree = this.getTree;
  },
  mounted() {
    this.unwatch = this.$store.watch(
      (state) => {
        return state.RubricsTree.treeObject;
      },
      (oldVal) => {
        this.tree = oldVal;
      },
      { deep: true }
    );
  },
  beforeUnmount() {
    this.unwatch();
  },
};
</script>
<style>
.tree__branch {
  margin-left: 20px;
  margin-bottom: 10px;
}

input[type="checkbox"] {
  width: 15px;
  height: 15px;
  margin-left: 10px;
  margin-right: 20px;
}

.tree {
  position: relative;
  margin-bottom: 50px;
}

.total-count {
  font-size: 20px;
  display: block;
}

.loader {
  font-weight: 600;
  font-size: 30px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%);
}
</style>
