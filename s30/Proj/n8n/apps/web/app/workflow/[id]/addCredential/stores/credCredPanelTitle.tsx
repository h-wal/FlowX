import { create } from "zustand";

interface credPanelTitleStore{
    
    CredTitle: string,
    setCredTitle: (val: string) => void

};

export const useCredPanelTitleStore = create<credPanelTitleStore>((set) => ({
    
    CredTitle: "",
    setCredTitle: (val: string) => set({CredTitle: val})

}));
