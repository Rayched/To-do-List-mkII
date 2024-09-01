import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

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
    return (
        <Container>
            <h2>To Do List</h2>
            <CreateToDo />
            <ToDoList />
        </Container>
    );
}

export default Home;