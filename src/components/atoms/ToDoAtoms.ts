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
        /**
         * ToDo_State의 모든 값을 받아오고
         * 제대로 받아왔는 지 확인하기 위해서
         * console에 toDos의 length 출력
         */
        return toDos.length;
    }
});