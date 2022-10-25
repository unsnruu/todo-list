import styled from "@emotion/styled";
import type { PropsWithChildren, FormEvent } from "react";

interface FormProps extends PropsWithChildren {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
function Form({ children, handleSubmit }: FormProps) {
  return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
}
export default Form;

const StyledForm = styled.form`
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
