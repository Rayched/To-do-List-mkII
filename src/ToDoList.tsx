import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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
    /*
    //Before use react-hook-form

    const [ToDo, setToDo] = useState("");
    const [ToDoError, setToDoError] = useState("");

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} = event;
        setToDo(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(ToDo.length < 2){
            setToDoError("입력하신 일정을 확인해주세요. (최소 2 글자 이상)")
        } else {
            console.log("submit", ToDo);
        }
    };

    return (
        <ToDoWrapper>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    value={ToDo} 
                    placeholder="일정을 적어주세요."
                />
                <button>추가</button>
            </form>
            <div>
                {
                    (ToDo === "" || ToDo.length < 2) 
                    ? ToDoError : ToDo
                }
            </div>
        </ToDoWrapper>
    );
    */

   //After use react-hook-form

   const { register, watch } = useForm();

   console.log(watch());

   return (
    <ToDoWrapper>
        <form>
            <input {...register("ToDo")} placeholder="일정을 적어주세요."/>
            <button>추가</button>
        </form>
    </ToDoWrapper>
   );
}

export default ToDoList;