import { useState } from "react";
import useTodoList from "@hooks/useTodoList";
import categoryService from "@services/category.service";
import CommonPage from "@components/CommonPage";
import CategoryItem from "@components/CategoryItem";

import type { FormEvent, ChangeEvent } from "react";
import type { Category, CategoryId } from "src/types/category.type";

function CategoryEdit() {
  const { categories, setCategories, user, state } = useTodoList();
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length < 0) throw new Error("글자를 입력하세요");

    const id = await categoryService.addCategory(title, user);
    if (!id) throw new Error("새로운 카테고리 생성에 실패하였습니다.");

    setCategories((prev) => {
      if (!prev) return null;
      return [...prev, { id, title }];
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const handleEdit = () => {
    //카테고리 서버상에서 수정
    categoryService.editCategory();
    //카테고리 로컬상에서 수정
  };

  const createDeleteHandler = (category: Category) => async () => {
    const id = await categoryService.deleteCategory(category, user);
    setCategories((categories) => {
      if (!categories) return null;
      return categories.filter((category) => category.id !== id);
    });
  };

  if (!categories) return <div></div>;
  return (
    <CommonPage>
      <CommonPage.Form handleSubmit={handleSubmit}>
        <CommonPage.TextInput
          placeholder="새로운 카테고리를 생성하세요"
          handleChange={handleChange}
        />
        <CommonPage.SubmitButton text="추가" />
      </CommonPage.Form>
      <CommonPage.List>
        {categories.map(({ id, title }) => (
          <CategoryItem
            key={id}
            text={title}
            handleDelete={createDeleteHandler({ id, title })}
            handleEdit={handleEdit}
          />
        ))}
      </CommonPage.List>
    </CommonPage>
  );
}

export default CategoryEdit;