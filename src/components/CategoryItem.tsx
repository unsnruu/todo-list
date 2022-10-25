import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import CommonListItem from "./CommonListItem";

interface CategoryItemProps {
  id: string;
  text: string;
  handleDelete: () => void;
}
function CategoryItem({ id, text, handleDelete }: CategoryItemProps) {
  return (
    <CommonListItem>
      <CommonListItem.Text text={text} />
      <CommonListItem.Icons>
        <Link to={`/app/edit/category/${id}`}>
          <MdModeEdit />
        </Link>
        <MdDelete onClick={handleDelete} />
      </CommonListItem.Icons>
    </CommonListItem>
  );
}

export default CategoryItem;
