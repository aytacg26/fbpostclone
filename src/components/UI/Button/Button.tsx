import classes from './Button.module.scss';

interface IProps {
  text?: string;
  icon?: JSX.Element;
  type?: 'button' | 'reset' | 'submit';
  color?: 'blue' | 'red' | 'orange';
  onClick?: () => void;
}

const Button = ({ type, color, text, icon, onClick }: IProps) => {
  const colorClass = color
    ? color === 'blue'
      ? classes.Blue
      : color === 'red'
      ? classes.Red
      : color === 'orange'
      ? classes.Orange
      : ''
    : '';

  return (
    <button
      type={type}
      className={`${classes.Button} ${colorClass}`}
      onClick={onClick}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
