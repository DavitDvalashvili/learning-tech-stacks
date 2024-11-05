import { create } from "zustand";

type counterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    incrementAsync: () => Promise<void>
}

export const useCounterStore = create <counterStore>((set) => ({
    count: 0,

    increment: () => {
        set((state) => ({count: state.count +1}))
    },
    decrement: () => {
        set((state) => ({count: state.count -1}))
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        set((state) => ({count: state.count +1}))
    }
}))
