import styled from "@emotion/styled";

interface SubmitButtonProps {
  text: string;
  handleClick?: () => void;
}

function SubmitButton({ text, handleClick }: SubmitButtonProps) {
  return <Button onClick={handleClick}>{text}</Button>;
}
export default SubmitButton;

const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 0.5rem;
  padding: 1rem;
  flex: 1;
  cursor: pointer;
  font-size: 1rem;
  color: white;
`;
