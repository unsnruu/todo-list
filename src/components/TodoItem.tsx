import { MdDelete, MdModeEdit } from "react-icons/md";
import CommonListItem from "./CommonListItem";
import type { MouseEvent } from "react";

interface TodoItemProps {
  text: string;
  isCompleted: boolean;
  handleClickToggle: (e: MouseEvent<HTMLButtonElement>) => void;
  handleClickEdit: () => void;
  handleClickDelete: () => void;
}

function TodoItem({
  text,
  isCompleted,
  handleClickToggle,
  handleClickEdit,
  handleClickDelete,
}: TodoItemProps) {
  return (
    <CommonListItem>
      <CommonListItem.Completion
        isCompleted={isCompleted}
        handleClick={handleClickToggle}
      />
      <CommonListItem.Text text={text} />
      <CommonListItem.Icons>
        <MdModeEdit onClick={handleClickEdit} />
        <MdDelete onClick={handleClickDelete} />
      </CommonListItem.Icons>
    </CommonListItem>
  );
}

export default TodoItem;
