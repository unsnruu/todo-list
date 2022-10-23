import { MdModeEdit } from "react-icons/md";

import useTodoList from "@hooks/useTodoList";
import categoryService from "@services/category.service";

function CategoryEdit() {
  const { categories } = useTodoList();

  const handleClickEdit = () => {
    //카테고리 서버상에서 수정
    categoryService.editCategory();
    //카테고리 로컬상에서 수정
  };

  return (
    <div>
      <h1>카테고리 수정</h1>
      <ul>
        {categories?.map(({ title }, idx) => (
          <li key={idx}>
            <span>{title}</span>
            <MdModeEdit onClick={handleClickEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryEdit;
