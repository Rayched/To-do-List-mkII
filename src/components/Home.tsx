import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";
import { useRecoilState } from "recoil";
import { categoryState } from "./atoms/ToDoAtoms";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: bold;
        font-size: 20px;
        padding: 8px 0px;
        margin: 5px 0px;
    }
`;

function Home(){
    const [Category, setCategory] = useRecoilState(categoryState);

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const {currentTarget: {value}} = event;
        setCategory(value);
    };

    console.log(Category);

    return (
        <Container>
            <h2>To Do List</h2>
            <CreateToDo />
            <form>
                <select onInput={onInput}>
                    <option value="To-Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </form>
            <ToDoList />
        </Container>
    );
}

export default Home;