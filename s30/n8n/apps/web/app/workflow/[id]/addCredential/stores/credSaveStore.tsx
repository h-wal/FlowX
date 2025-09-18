import { create } from "zustand";

interface credPanelSaveStore{
    
    saveButtonPressed: boolean,
    setSaveButtonPressed: (val: boolean) => void

};

export const useCredPanelSaveButtonStore = create<credPanelSaveStore>((set) => ({
    
    saveButtonPressed: false,
    setSaveButtonPressed: (val: boolean) => set({saveButtonPressed: val})

}));
