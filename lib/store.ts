import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";
import { devtools } from "zustand/middleware";

interface StoreInterface {
    isOpen: boolean;
    isScroll: boolean;
    openNav: () => void;
    setScroll: (isScroll: boolean) => void;
}

const getDefaultInitialState = () => ({
    isOpen: false,
    isScroll: false,
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
    return createStore<StoreInterface>()(
        devtools(
            (set, get) => ({
                ...getDefaultInitialState(),
                ...preloadedState,
                openNav: () => {
                    set({ isOpen: !get().isOpen }, false, "openNav");
                },
                setScroll: (isScroll) => {
                    set({ isScroll }, false, "setScroll");
                },
            }),
            {
                enabled: process.env.NODE_ENV !== "production",
            },
        ),
    );
};
