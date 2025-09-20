import {create} from "zustand"

type SelectedCredentialStoreType = {
    
    selectedCredentialTitle: string,
    setSelectedCredentialTitle: (val: string) => void
}

export const useSelectedCredentialStore = create<SelectedCredentialStoreType>((set) => ({
    
    selectedCredentialTitle: "",
    setSelectedCredentialTitle: (val: string) => set({selectedCredentialTitle: val})
        
}))