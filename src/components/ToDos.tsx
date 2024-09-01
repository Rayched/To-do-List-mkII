import { useRecoilValue } from "recoil";
import { ToDos_Atom } from "./atoms/ToDoAtoms";
import styled from "styled-components";

const ToDos_Wrap = styled.div`
    margin: 5px;

    h4 {
        font-weight: bold;
        padding: 5px 0px;
    }
`;

function ToDoList(){
    const ToDos = useRecoilValue(ToDos_Atom);

    return (
        <ToDos_Wrap>
            <h4>일정 목록</h4>
            <ul>
                {
                    ToDos.map((ToDo) => {
                        return (
                            <li>
                                {ToDo.text} / {ToDo.category}
                            </li>
                        )
                    })
                }
            </ul>
        </ToDos_Wrap>
    );
}

export default ToDoList;