import create from "zustand";

const useStore = create((set) => ({
  model: null,
  orderedModels: [],
  favorites: [],
  setModel: (model) => set({ model }),
  clearModel: () => set({ model: null }),
  addModel: (model) =>
    set((state) => ({ orderedModels: [...state.orderedModels, model] })),
  addFavorite: (model) =>
    set((state) => ({ favorites: [...state.favorites, model] })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((x) => x.id !== id),
    })),
}));

export default useStore;
