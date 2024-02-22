import {create} from 'zustand';

const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

type BearStoreType = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<BearStoreType>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}));

type TodoStoreType = {
  todos: {
    title: string;
    id: number;
  }[];
  isLoading: boolean;
  isError: boolean;
  fetchTodos: () => Promise<void>;
  clearTodos: () => void;
};

export const useTodoStore = create<TodoStoreType>((set) => ({
  todos: [],
  isLoading: false,
  isError: false,
  fetchTodos: async () => {
    set({isLoading: true});
    try {
      const response = await fetch(API_URL);
      set({todos: await response.json()});
    } catch (error) {
      set({isError: true});
    } finally {
      set({isLoading: false});
    }
  },
  clearTodos: () => set({todos: []}),
}));

// more examples https://my-js.org/docs/cheatsheet/zustand/
