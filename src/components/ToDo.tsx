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