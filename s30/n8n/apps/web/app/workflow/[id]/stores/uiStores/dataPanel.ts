import { create } from "zustand";

type PanelState = {
    node: any,
    panelOpen: boolean,
    setPanelOpen: (val: boolean) => void,
    setNode: (val: object) => void

};

export const usePanelStore = create<PanelState>((set) => ({
    
    node: {},
    panelOpen: false,
    setPanelOpen: (val) => set({panelOpen: val}),
    setNode: (val) => set({node: val})

}));
