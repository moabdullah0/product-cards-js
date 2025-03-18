import { create } from "zustand";

const useFavoriteStore = create((set) => ({
  favorite: [],
  addToFav: (product) =>
    set((state) => ({
      favorite: state.favorite.find((item) => item.id === product.id)
        ? state.favorite
        : [...state.favorite, product],
    })),
  removeFromFav: (productId) =>
    set((state) => ({
      favorite: state.favorite.filter((item) => item.id !== productId),
    })),
}));

export default useFavoriteStore;
