import { useState } from "react";
import styled from "styled-components";

const ToDoWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0px;
`;

function ToDoList(){
    const [ToDo, setToDo] = useState("");

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} = event;
        setToDo(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(ToDo);
        setToDo("");
    };

    return (
        <ToDoWrapper>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={ToDo} placeholder="일정을 적어주세요."/>
                <button>추가</button>
            </form>
        </ToDoWrapper>
    );
}

export default ToDoList;