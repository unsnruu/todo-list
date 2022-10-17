import styled from "@emotion/styled";

interface TodoItemProps {
  text: string;
  handleDelete: () => void;
  handleEdit: () => void;
}

function TodoItem({ text, handleDelete }: TodoItemProps) {
  return (
    <Container>
      <Text>{text}</Text>
      <div>
        <span onClick={handleDelete}>지우기</span>
      </div>
    </Container>
  );
}
export default TodoItem;

const Container = styled.li`
  background-color: white;
  margin-bottom: 1rem;
  list-style: none;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Text = styled.span``;
