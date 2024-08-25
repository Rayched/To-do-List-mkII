import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

//Type's
interface ToDo_Types {
    ToDo: string;
};

//styled-components
const ToDoWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0px;
    flex-direction: column;

    form {
        display: block;
        flex-direction: row;
        margin-bottom: 10px;
    }
`;

function ToDoList(){
    const [ToDos, setToDos] = useState("");

    const { register, handleSubmit, setValue,  } = useForm<ToDo_Types>();

    const AddToDo = (data: ToDo_Types) => {
        setToDos(data.ToDo);
        setValue("ToDo", "");
    }

   return (
    <ToDoWrapper>
        <form onSubmit={handleSubmit(AddToDo)}>
            <input {
                ...register("ToDo" ,{ required: "일정을 입력해주세요."})} 
                placeholder="오늘 일정을 적어주세요."
            />
            <button>추가</button>
        </form>
        <div>
            <h3>추가된 일정</h3>
            <span>{ToDos}</span>
        </div>
    </ToDoWrapper>
   );
}

export default ToDoList;