import { create } from "zustand";

type askAiPanelState = {

    aiPanelOpen: boolean,
    setAiPanelOpen: (val: boolean) => void,

};

export const useAiPanelStore = create<askAiPanelState>((set) => ({
    
    aiPanelOpen: true,
    setAiPanelOpen: (val) => set({aiPanelOpen: val}),

}));
