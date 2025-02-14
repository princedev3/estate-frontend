import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist((set) => ({
    user: {
      id: "",
      username: "",
      avatar: "",
      email: "",
    },
    addUser: (newUser) => set({ user: newUser }),
    clearUser: () =>
      set({
        user: {
          id: "",
          username: "",
          avatar: "",
          email: "",
        },
      }),
  })),
  {
    name: "user-storage",
    partialize: (state) => ({ user: state.user }),
  }
);

export default useUserStore;
