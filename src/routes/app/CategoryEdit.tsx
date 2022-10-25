import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "@components/CommonPage";
import useTodoList from "@hooks/useTodoList";

import type { ChangeEvent, FormEvent } from "react";
import categoryService from "@services/category.service";

function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories, setCategories, user } = useTodoList();
  const curCategory = categories
    ?.filter((category) => category.id === id)
    .pop();
  const [newTitle, setNewTitle] = useState(curCategory?.title);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) throw new Error("아이디가 존재하지 않습니다.");
    if (!newTitle) throw new Error("텍스트가 존재하지 않습니다.");
    if (!curCategory) throw new Error("카테고리가 존재하지 않습니다.");

    await categoryService.editCategory(curCategory, newTitle, user);
    setCategories((categories) => {
      if (!categories) return null;
      return categories.map((category) =>
        category.id === id ? { ...category, title: newTitle } : category
      );
    });
    navigate("/app/category");
  };

  return (
    <Page>
      <Page.Title text="수정하기" />
      <Page.Form handleSubmit={handleSubmit}>
        <Page.TextInput placeholder={newTitle} handleChange={handleChange} />
        <Page.SubmitButton text="변경하기" />
      </Page.Form>
    </Page>
  );
}

export default CategoryEdit;
