import { create } from "zustand";

type SaveState = {
    
    triggerSave: boolean;
    setTriggerSave: (val: boolean) => void;
    saving: boolean;
    saved: boolean;
    setSaved: (val: boolean) => void;
    setSaving: (val: boolean) => void;
};

export const useSaveStore = create<SaveState>((set) => ({

    saving: false,
    saved: true,
    triggerSave: false,
    setTriggerSave: (val) => set({triggerSave: val}),
    setSaved: (val) => set({ saved: val }),
    setSaving: (val) => set({ saving: val})
    
}));
