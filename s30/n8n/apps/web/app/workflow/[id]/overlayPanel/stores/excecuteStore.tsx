import { create } from "zustand";

type ExcecuteButtonStore = {

    isExcecuteButtonPressed: boolean,
    setIsExcecuteButtonPressed: (val: boolean) => void,

};

export const useExcecuteButtonStore = create<ExcecuteButtonStore>((set) => ({
    
    isExcecuteButtonPressed: false,
    setIsExcecuteButtonPressed: (val) => set({isExcecuteButtonPressed: val}),

}));
