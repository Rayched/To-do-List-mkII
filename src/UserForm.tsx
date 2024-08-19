//회원가입 input form

import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form_Wrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    align-items: center;
    flex-direction: column;

    h3 {
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 10px 0px;

        span {
            display: block;
            margin: 3px 0px;
        }
    }
`;

function UserForm(){
    const {register, handleSubmit, formState} = useForm();

    const onValid = (data: any) => {
        alert(`form's => [${data.Name}, ${data.ID}, ${data.PW}]`);
    };

    console.log(formState.errors);

    return (
        <Form_Wrap>
            <h3>회원가입</h3>
            <form onSubmit={handleSubmit(onValid)}>
                <span>
                    이름: 
                    <input 
                        {...register("Name", {required: true})} 
                        placeholder="이름을 입력해주세요."
                    />
                </span>
                <span>
                    아이디: 
                    <input 
                        {...register("ID", {required: true})} 
                        placeholder="아이디를 입력해주세요."
                    />
                </span>
                <span>
                    비밀번호: 
                    <input
                        {...register("PW", {required: true})}
                        placeholder="비밀번호를 입력해주세요."
                     />
                </span>
                <span>
                    비밀번호 확인: 
                    <input 
                        {...register("PW_Check", {required: true})} 
                        placeholder="비밀번호를 다시 입력해주세요."
                    />
                </span>
                <button>제출</button>
            </form>
        </Form_Wrap>
    );
};

export default UserForm;