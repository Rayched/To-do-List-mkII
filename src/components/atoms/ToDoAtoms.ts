import { atom, selector } from "recoil";

export interface I_ToDos {
    id: number;
    text: string;
    category: "To-Do"|"Doing"|"Done";
}

export const ToDo_State = atom<I_ToDos[]>({
    key: "ToDos",
    default: []
});


export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(ToDo_State);

        return [
            toDos.filter((toDo) => toDo.category === "To-Do"),
            toDos.filter((toDo) => toDo.category === "Doing"),
            toDos.filter((toDo) => toDo.category === "Done")
        ];
    }
});