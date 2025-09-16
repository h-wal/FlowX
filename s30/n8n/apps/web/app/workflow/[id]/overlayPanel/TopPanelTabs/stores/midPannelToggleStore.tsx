import { create } from "zustand"

interface toggleStore{
    panel: string,
    setPanel: (val: string) => void
}

export const useToggleStore = create<toggleStore>((set) => ({
    panel: "settings",
    setPanel: (val) => set({panel: val})
}))