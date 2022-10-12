const RubricsTree = {
  state: () => ({
    treeObject: null,
  }),
  mutations: {
    setTree(state, tree) {
      state.treeObject = tree;
    },
  },
  actions: {
    fetchTree({ commit }, params) {
      let paramsString;

      if (params) {
        paramsString = Object.keys(params).reduce((acc, key) => {
          return acc + `${key}=${params[key]}`;
        }, "");
      } else {
        paramsString = "";
      }

      return fetch(
        `https://www.klerk.ru/yindex.php/v3/event/rubrics?${paramsString}`
      )
        .then((res) => {
          return res.json();
        })
        .then((tree) => {
          commit("setTree", tree);
        });
    },
  },
  getters: {
    getTree(state) {
      return state.treeObject;
    },
  },
  namespaced: true,
};

export default RubricsTree;
