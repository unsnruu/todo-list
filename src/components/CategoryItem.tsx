import { MdDelete, MdModeEdit } from "react-icons/md";
import CommonListItem from "./CommonListItem";

interface CategoryItemProps {
  text: string;
  handleEdit: () => void;
  handleDelete: () => void;
}
function CategoryItem({ text, handleEdit, handleDelete }: CategoryItemProps) {
  return (
    <CommonListItem>
      <CommonListItem.Text text={text} />
      <CommonListItem.Icons>
        <MdModeEdit onClick={handleEdit} />
        <MdDelete onClick={handleDelete} />
      </CommonListItem.Icons>
    </CommonListItem>
  );
}

export default CategoryItem;
