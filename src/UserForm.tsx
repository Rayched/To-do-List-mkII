//회원가입 input form

import { useForm } from "react-hook-form";
import styled from "styled-components";

interface FormData_Types {
    errors: {
        Name: { message: string; };
        Email: { message: string; };
        ID: { message: string; };
        PW: { message: string; };
        PW_Check: { message: string; };
    };
    Name: string;
    ID: string;
    PW: string;
    PW_Check: string;
    Email: string;

    Extra_Errors: string|undefined;
};

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

const Errors_Box = styled.div`
    margin-top: 10px;
    padding: 5px;
    border: 2px solid black;

    display: flex;
    flex-direction: column;

    align-items: center;

    font-weight: bold;
`;

const Error_List = styled.div`
    margin-top: 10px;
    padding: 5px;
    color: red;

    span {
        display: block;
    }
`;

function UserForm(){
    const {register, handleSubmit, formState: {errors}, setError} = useForm<FormData_Types>({
        defaultValues: {
            Email: "@naver.com"
        }
    });

    const onValid = (data: FormData_Types) => {
        if(data.PW !== data.PW_Check){
            setError("PW_Check", { message : "동일한 비밀번호를 입력해주세요."}, {shouldFocus: true})
        }
        setError("Extra_Errors", {message: "서버 접속에 실패했습니다."});
    };

    console.log(errors);

    return (
        <Form_Wrap>
            {/** */}
            <h3>회원 정보 입력</h3>
            <form onSubmit={handleSubmit(onValid)}>
                <span>
                    이름: 
                    <input 
                        {
                            ...register("Name", {
                                required: "이름을 입력하지 않았습니다!!", 
                                minLength: 2
                            })
                        } 
                        placeholder="이름을 입력해주세요."
                    />
                </span>
                <span>
                    아이디: 
                    <input 
                        {
                            ...register("ID", {
                                required: "아이디를 입력하지 않았습니다.", 
                                validate: {
                                    sameID: (value) => value.includes("ny2401") ? `${value}는 중복된 ID 입니다.` : true,
                                }
                            })
                        } 
                        placeholder="사용하실 ID를 입력 해주세요."
                    />
                </span>
                <span>
                    비밀번호: 
                    <input
                        {...register("PW", {
                            required: "비밀번호를 입력하지 않았습니다.", 
                            minLength: {
                                value: 8,
                                message: "비밀번호는 8자 이상 입력하셔야 합니다."
                            }
                        })}
                        type="password"
                        placeholder="사용하실 PW를 입력해주세요."
                     />
                </span>
                <span>
                    비밀번호 확인: 
                    <input 
                        {
                            ...register("PW_Check", {
                                required: "비밀번호 확인이 되지 않았습니다.", 
                            })
                        } 
                        type="password"
                        placeholder="PW를 다시 입력해주세요."
                    />
                </span>
                <span>
                    이메일:
                    <input 
                        {...register("Email", {
                            required: "이메일을 입력하지 않았습니다.",
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
                                message: "이메일은 '~@naver.com' 형식만 쓸 수 있습니다."
                            },
                        })}
                        placeholder="이메일을 입력해주세요."
                    />
                </span>
                <button>제출</button>
            </form>
            <Errors_Box>
                <h4>Error Box</h4>
                <Error_List>
                    <span>{errors?.Name?.message}</span>
                    <span>{errors?.ID?.message}</span>
                    <span>{errors?.PW?.message}</span>
                    <span>{errors?.PW_Check?.message}</span>
                    <span>{errors?.Email?.message}</span>
                    <span>{errors?.Extra_Errors?.message}</span>
                </Error_List>
            </Errors_Box>
        </Form_Wrap>
    );
};

export default UserForm;