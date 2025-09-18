import { create } from "zustand";

type credentialPanelstate = {
    type: any,
    credPanelOpen: boolean,
    setCredPanelOpen: (val: boolean) => void,
    setType: (val: string) => void

};

export const useCredPanelStore = create<credentialPanelstate>((set) => ({
    
    type: "",
    credPanelOpen: false,
    setCredPanelOpen: (val) => set({credPanelOpen: val}),
    setType: (val) => set({type: val})

}));
