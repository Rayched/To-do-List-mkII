import { useRecoilValue } from "recoil";
import { ToDo_State } from "./atoms/ToDoAtoms";
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

function ToDoList(){
    const ToDos = useRecoilValue(ToDo_State);

    return (
        <ToDos_Wrap>
            <h4>일정 목록</h4>
            <ul>
                {
                    ToDos.map((todo) => {
                        return (
                            <div>
                                <ToDo 
                                    id={todo.id} 
                                    text={todo.text} 
                                    category={todo.category}
                                />
                            </div>
                        )
                        /**
                         * <ToDo {...todo}/> 형식으로 축약해서 작성 가능
                         * 
                         * ToDos 배열의 todo 요소 하나하나가
                         * ToDo 컴포넌트에서 요구하는 props와
                         * ToDos 배열의 타입이 'I_ToDos'로 동일한 props 가지고 있기 때문이다.
                         * 
                         * 정리하는 시점에서 아직 이해하진 못했기에
                         * 위의 형식으로 업데이트는 하지 않았다
                         * 
                         * 대신 이런 식으로 주석으로 메모를 남겨두도록 하겠다.
                         */
                    })
                }
            </ul>
        </ToDos_Wrap>
    );
}

export default ToDoList;