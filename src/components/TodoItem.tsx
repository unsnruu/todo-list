import { Link } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import CommonListItem from "./CommonListItem";
import type { MouseEvent } from "react";
import useTodoList from "@hooks/useTodoList";

interface TodoItemProps {
  id: string;
  text: string;
  isCompleted: boolean;
  handleClickToggle: (e: MouseEvent<HTMLButtonElement>) => void;
  handleClickDelete: () => void;
}

function TodoItem({
  text,
  id,
  isCompleted,
  handleClickToggle,
  handleClickDelete,
}: TodoItemProps) {
  const { selectedCategory } = useTodoList();

  return (
    <CommonListItem>
      <CommonListItem.Completion
        isCompleted={isCompleted}
        handleClick={handleClickToggle}
      />
      <CommonListItem.Text text={text} />
      <CommonListItem.Icons>
        <Link to={`/app/edit/todo/${selectedCategory}/${id}`}>
          <MdModeEdit />
        </Link>
        <MdDelete onClick={handleClickDelete} />
      </CommonListItem.Icons>
    </CommonListItem>
  );
}

export default TodoItem;
