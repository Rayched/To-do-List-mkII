import { atom } from "recoil";

export interface I_ToDos {
    id: number;
    text: string;
    category: "To-Do"|"Doing"|"Done";
}

export const ToDo_State = atom<I_ToDos[]>({
    key: "ToDos",
    default: []
});