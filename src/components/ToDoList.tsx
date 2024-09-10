import { selector, useRecoilValue } from "recoil";
import { ToDo_State, toDoSelector } from "./atoms/ToDoAtoms";
import styled from "styled-components";
import ToDo from "./ToDo";

const ToDos_Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;

    h4 {
        font-weight: bold;
        padding: 5px 0px;
    }
`;

const AllToDos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0px;

    div {
        align-items: center;
        margin: 0px 5px;
        padding: 3px;
    }

    h3 {
        display: flex;
        font-weight: bold;
        justify-content: center;
        margin: 3px 0px;
        padding: 5px;
    }

    span {
        display: block;
    }
`;

/**
 * 1. 'id' 통해서 category 수정할 To Do 찾아야 한다.
 * 2. 정확히 말하면 해당 To Do의 index를 알아야 한다.
 * 3. array method인 array.findIndex() 통해서 찾는다.
 */

function ToDoList(){
    const toDos = useRecoilValue(toDoSelector);

    console.log(toDos);

    return (
        <ToDos_Wrap>
            <AllToDos>
                <div key="ToDo_Items">
                    <ul>
                        {
                            toDos?.map((toDo) => 
                                <ToDo id={toDo.id} text={toDo.text} category={toDo.category}/>
                            )
                        }
                    </ul>
                </div>
            </AllToDos>
        </ToDos_Wrap>
    );
}

export default ToDoList;