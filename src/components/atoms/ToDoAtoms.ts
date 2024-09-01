import { atom } from "recoil";

interface I_ToDos {
    id: number;
    text: string;
    category: "To-Do"|"Doing"|"Done";
}

export const ToDos_Atom = atom<I_ToDos[]>({
    key: "ToDos",
    default: []
})