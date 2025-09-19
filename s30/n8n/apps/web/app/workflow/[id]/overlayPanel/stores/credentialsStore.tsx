import { create } from "zustand";

type credentialsStore = {

    credentials: object[],
    setCredentials: (val: object[]) => void,

};

export const useCredentialsStore = create<credentialsStore>((set) => ({
    
    credentials: [{}],
    setCredentials: (val) => set({credentials: val}),

}));
