const RubricsTree = {
  state: () => ({
    treeObject: null,
    opendIDArray: [],
    selectedIDArray: [],
  }),
  mutations: {
    setTree(state, tree) {
      state.treeObject = tree;
    },
    addOpendId(state, id) {
      state.opendIDArray.push(id);
    },
    addSelectedId(state, id) {
      state.selectedIDArray.push(id);
    },
    removeOpendId(state, id) {
      const arrayId = state.opendIDArray.findIndex((el) => el === id);
      state.opendIDArray.splice(arrayId, 1);
    },
    removeSelectedId(state, id) {
      const arrayId = state.selectedIDArray.findIndex((el) => el === id);
      state.selectedIDArray.splice(arrayId, 1);
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
    getOpendId(state) {
      return state.opendIDArray;
    },
    getSelectedId(state) {
      return state.selectedIDArray;
    },
  },
  namespaced: true,
};

export default RubricsTree;
