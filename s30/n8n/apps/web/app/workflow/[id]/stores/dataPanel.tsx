import { create } from "zustand";

type PanelState = {
    panelOpen: boolean;
    setPanelOpen: (val: boolean) => void;
};

export const usePanelStore = create<PanelState>((set) => ({

    panelOpen: true,
    setPanelOpen: (val) => set({panelOpen: val})

}));
