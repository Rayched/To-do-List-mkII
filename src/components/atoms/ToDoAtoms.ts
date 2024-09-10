import { atom, selector } from "recoil";

export enum Categories {
    ToDo = "ToDo",
    Doing = "Doing",
    Done = "Done"
};

//type categorys = "To-Do"|"Doing"|"Done";

export interface I_ToDos {
    id: number;
    text: string;
    category: Categories;
}

//전체 To Do 저장해두는 state (type: array[])
export const ToDo_State = atom<I_ToDos[]>({
    key: "ToDos",
    default: []
});

//사용자가 선택한 category를 기억해두는 state
export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.ToDo
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(ToDo_State);
        const Categorys = get(categoryState);

        return toDos.filter((toDo) => toDo.category === Categorys);
    }
});