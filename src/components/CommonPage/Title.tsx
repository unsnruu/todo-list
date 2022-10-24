interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return <h2>{text}</h2>;
}

export default Title;
