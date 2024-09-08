//To Do, 일정 Component

import styled from "styled-components";
import { I_ToDos, ToDo_State } from "./atoms/ToDoAtoms";
import { useSetRecoilState } from "recoil";

const ToDo_box = styled.div`
    padding: 5px;
    margin: 5px 0px;
    border: 2px solid black;
    border-radius: 10px;

    display: flex;

    .ToDo_Item {
        padding: 3px;
        margin: 0px 5px;
    }
`;

function ToDo({id, text, category}: I_ToDos){
    const setToDos = useSetRecoilState(ToDo_State);

    const Change_Categorys = (event: React.MouseEvent<HTMLButtonElement>) => {
        //interface의 속성 하나를 꺼내오는 방법
        //'interface["prop_name"]'
        const {
            currentTarget: {name}
        } = event;

        //ToDo의 Category 변경하는 버튼 만들고
        //해당 버튼의 event Listener를 만들었다.
        //그리고 각 버튼에 name 추가, 이를 event Listener에서
        //활용할 수 있게 하고, 마지막으로 ToDo_State 변경하는
        //setToDos까지 만들어놨다. (준비 단계)

        setToDos((oldTodos) => {
            const TargetIndex = oldTodos.findIndex((toDo) => toDo.id === id);
            /**
             * ToDo_State 배열에 저장된 To Do 객체의 id와
             * 화면 상에 출력되는 To Do의 id를 비교하고
             * 일치하는 id 값을 가진 To Do 객체의 배열 index를 return한다.
             * 
             * array method인 array.findIndex() 통해서
             * To Do의 index를 찾아냈다. 
             * 그리고 찾아온 index를 TargetIndex 변수에 저장해둔다.
             */
            const newToDo = {id, text, category: name as any};

            console.log(TargetIndex, newToDo);

            /**
             * oldTodo(ToDo_state 배열에 저장된 To Do List)
             * newToDo (category만 변경한 새로운 To Do)
             * 기존 To Do, 새로운 To Do 모두 가져왔다.
             * 
             * 이제 newToDo의 category 변경 사항을
             * oldTodo, ToDo_State에 적용해야 한다.
             */
            return [
                ...oldTodos.slice(0, TargetIndex), 
                newToDo, 
                ...oldTodos.slice(TargetIndex+1)
            ];
            /**
            * Array.slice() 통해서
            * 0 ~ TargetIndex까지의 배열 요소를 추출해서
            * 새로운 배열을 만들고
            * TargetIndex ~ last_index까지의 배열 요소를 추출해서
            * 새로운 배열을 추가로 생성한다.
            * 이때 '...'(spread syntax) 통해서
            * 각 배열의 원소를 분해하고
            * newToDo 포함한 새로운 배열을 return한다.

            * 이제 oldToDos에서 type error가 발생한다.
            * 'I_Todos'에서 category의 값을
            * "To-Do"|"Doing"|"Done" 세 가지로 제한한 상태에서
            * newToDos의 category의 값이 위의 세가지 값이 아니라
            * 그냥 일반 string 값으로 취급되기 때문이다.
            * 
            * 임시로 newToDos의 category의 타입을
            * 'any' 타입으로 단언해뒀다.
            * 
            * 좋은 방식은 아니지만, 일단 작동은 한다.
            * 
            * 위의 과정은 ToDo를 업데이트하는 것은 아니고
            * ToDo를 삭제하고 새로운 ToDo 배열을 만들어서
            * 결과를 보여주고 있을 뿐이다.
            */
        });
    };

    return (
        <ToDo_box key={id}>
            <span className="ToDo_Item">
                <li>{text}</li>
            </span>
            <span>
                {category !== "To-Do" && (
                    <button name="To-Do" onClick={Change_Categorys}>To Do</button>
                )}
                {category !== "Doing" && (
                    <button name="Doing" onClick={Change_Categorys}>Doing</button>
                )}
                {category !== "Done" && (
                    <button name="Done" onClick={Change_Categorys}>Done</button>
                )}
            </span>
        </ToDo_box>
    );
}

export default ToDo;