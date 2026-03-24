interface TitleProps {
  text: string;
}

interface TitleProps {
  text: string;
  color: string;
}

const Title = (props: TitleProps) => {
  return <h2 style={{ color: props.color }}>{props.text}</h2>;
};

export default Title;
