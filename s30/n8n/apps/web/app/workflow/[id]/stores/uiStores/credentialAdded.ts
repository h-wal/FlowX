import { create } from "zustand";

type credentialAddedstate = {
    
    newCredentialAdded: boolean,
    setNewCredentialAdded: (val : boolean) => void

};

export const useCredAddedStore = create<credentialAddedstate>((set) => ({
    
    newCredentialAdded: false,
    setNewCredentialAdded: (val: boolean) => set({newCredentialAdded: val})

}));
