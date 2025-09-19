import { create } from "zustand";

interface credPanelSaveStore{
    
    saved: boolean,
    setSaved: (val: boolean) => void
    saveButtonPressed: boolean,
    setSaveButtonPressed: (val: boolean) => void

};

export const useCredPanelSaveButtonStore = create<credPanelSaveStore>((set) => ({
    
    saved: false,
    setSaved: (val: boolean) => set({saved: val}),
    saveButtonPressed: false,
    setSaveButtonPressed: (val: boolean) => set({saveButtonPressed: val})

}));
