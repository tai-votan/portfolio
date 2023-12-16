import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";

interface StoreInterface {
    lastUpdate: number;
    light: boolean;
    count: number;
    decrement: () => void;
}

const getDefaultInitialState = () => ({
    lastUpdate: Date.now(),
    light: false,
    count: 0,
});

export type StoreType = ReturnType<typeof initializeStore>;

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
    const store = useContext(zustandContext);

    if (!store) throw new Error("Store is missing the provider");

    return useZustandStore(store, selector);
};

export const initializeStore = (preloadedState: Partial<StoreInterface> = {}) => {
    return createStore<StoreInterface>((set, get) => ({
        ...getDefaultInitialState(),
        ...preloadedState,
        decrement: () => {
            set({
                count: get().count - 1,
            });
        },
    }));
};
