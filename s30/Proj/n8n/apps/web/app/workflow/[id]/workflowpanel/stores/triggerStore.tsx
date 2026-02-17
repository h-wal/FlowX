import { create } from "zustand";

type TriggerState = {

    excecuting: boolean,
    setExcecuting: (val: boolean) => void,
    triggerPressed: boolean;
    setTriggerPressed: (val: boolean) => void
}

export const useTriggerStore = create<TriggerState>((set) => ({

    excecuting: true,
    setExcecuting: (val) => set({excecuting: val}),
    triggerPressed: false,
    setTriggerPressed: (val) => set({triggerPressed: val})

}))