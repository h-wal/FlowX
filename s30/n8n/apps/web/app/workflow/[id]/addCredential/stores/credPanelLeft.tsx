import { create } from "zustand";

interface credPanelLeftStoretype{
    
    tab: string,
    setTab: (val: string) => void

};

export const usecredPanelLeftStore = create<credPanelLeftStoretype>((set) => ({
    
    tab: "Connection",
    setTab: (val: string) => set({tab: val})

}));
