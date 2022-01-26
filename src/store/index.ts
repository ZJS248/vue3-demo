import { defineStore } from "pinia";

const useStore = defineStore("store", {
  state: () => {
    return { count: 0 };
  },
  getters: {},
  actions: {},
});

export default useStore;
