import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ToDo_State } from "./atoms/ToDoAtoms";

interface I_ToDo {
    ToDo: string
};

function CreateToDo(){
    const {register, handleSubmit, setValue} = useForm<I_ToDo>();

    const setToDos = useSetRecoilState(ToDo_State);

    const AddToDo = ({ToDo}: I_ToDo) => {
        setToDos((Old_ToDos) => [
            ...Old_ToDos, 
            {
                id: Date.now(),
                text: ToDo,
                category: "To-Do"
            }
        ]);
        setValue("ToDo", "");
    }

    return (
        <div>
            <form onSubmit={handleSubmit(AddToDo)}>
                <input {
                    ...register("ToDo", {required: "일정을 입력하지 않았습니다."})
                } placeholder="일정을 입력해주세요."/>
                <button>추가</button>
            </form>
        </div>
    );
}

export default CreateToDo;