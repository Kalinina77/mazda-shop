import create from "zustand";

const useStore = create((set) => ({
  model: null,
  setModel: (model) => set({ model }),
  clearModel: () => set({ model: null }),
}));

export default useStore;
