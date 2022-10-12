<template>
  <strong>{{ totalCount }}</strong>
  <div class="tree">
    <span>Разрешить пустые</span>
    <input type="checkbox" v-model="allowEmpty" /><br />
    <button v-if="tree && tree.length" @click="toggleAll()">
      Свернуть всё
      <!--  TODo менять текст-->
    </button>
    <template v-if="allShow">
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
          <!--  TODo менять текст-->
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
            /><!--  TODo Вынести в метод-->
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "rubrics-tree",
  data() {
    return {
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
    toggleAll() {
      this.allShow = !this.allShow;
      this.opendIDArray = [];
    },
    toggle(id) {
      if (this.opendIDArray.includes(id)) {
        const arrayId = this.opendIDArray.findIndex((el) => el.id === id);
        this.opendIDArray.splice(arrayId, 1);
        return;
      }
      this.opendIDArray.push(id);
    },
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
  watch: {
    allowEmpty(value) {
      value ? this.fetchTree({ allowEmpty: 1 }) : this.fetchTree();
    },
  },
  computed: {
    ...mapGetters({
      getTree: "RubricsTree/getTree",
    }),
    totalCount() {
      if (!this.tree?.length) return;
      let count = 0;

      function recursive(that, array) {
        for (let index = 0; index < array.length; index++) {
          const el = array[index];

          if ("children" in el && el.children.length > 0) {
            if (that.selectedIDArray.includes(el.id)) {
              count += that.totalBranchCount(el.id);
            }

            recursive(that, el.children);
          } else if (that.selectedIDArray.includes(el.id)) {
            count += el.count;
          }
        }
      }

      recursive(this, this.tree);

      return count;
    },
  },
  async created() {
    await this.fetchTree();
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
<style scoped>
.tree__link {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 10px;
}

.sub-tree__link {
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 5px;
}
</style>
