import { create } from "zustand";

type credentialPanelstate = {
    credPanelType: any,
    credPanelOpen: boolean,
    setCredPanelOpen: (val: boolean) => void,
    setCredPanelType: (val: string) => void

};

export const useCredPanelStore = create<credentialPanelstate>((set) => ({
    
    credPanelType: "",
    credPanelOpen: false,
    setCredPanelOpen: (val) => set({credPanelOpen: val}),
    setCredPanelType: (val) => set({credPanelType: val})

}));
