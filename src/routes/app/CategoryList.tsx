import { useState } from "react";
import useTodoList from "@hooks/useTodoList";
import categoryService from "@services/category.service";
import CommonPage from "@components/CommonPage";
import CategoryItem from "@components/CategoryItem";

import type { FormEvent, ChangeEvent } from "react";
import type { Category } from "src/types/category.type";
import SkeletonPage from "@components/SkeletonPage";

function CategoryList() {
  const { categories, setCategories, state } = useTodoList();
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length < 0) throw new Error("글자를 입력하세요");

    const id = await categoryService.addCategory({
      newCategoryTitle: title,
    });
    if (!id) throw new Error("새로운 카테고리 생성에 실패하였습니다.");

    setCategories((prev) => {
      if (!prev) return null;
      return [...prev, { id, title }];
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const createDeleteHandler = (category: Category) => async () => {
    const id = await categoryService.deleteCategory({ category });
    setCategories((categories) => {
      if (!categories) return null;
      return categories.filter((category) => category.id !== id);
    });
  };

  if (!categories) return <div>카테고리가 존재하지 않습니다</div>;
  if (state === "loading") <SkeletonPage />;
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
            id={id}
            text={title}
            handleDelete={createDeleteHandler({ id, title })}
          />
        ))}
      </CommonPage.List>
    </CommonPage>
  );
}

export default CategoryList;
