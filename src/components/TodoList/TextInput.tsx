import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

interface TextInputProps extends PropsWithChildren {
  placeholder?: string;
}

function TextInput({ children, placeholder }: TextInputProps) {
  return <Input placeholder={placeholder}>{children}</Input>;
}
export default TextInput;

const Input = styled.input`
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  flex: 5;
  outline: none;
  & :focus {
    background-color: transparent;
  }
`;
