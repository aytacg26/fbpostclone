import { useState } from 'react';
import { MdClear } from 'react-icons/md';
import LinkLabel from '../LinkLabel/LinkLabel';
import classes from './CircleButton.module.scss';

interface IProps {
  width?: string | number;
  height?: string | number;
  margin?: string;
  icon?: JSX.Element;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  backgroundColor?: string;
  title?: string;
}

const CircleButton = ({
  width,
  height,
  icon,
  onClick,
  type,
  backgroundColor,
  title,
  margin,
}: IProps) => {
  const [showLabel, setShowLabel] = useState(false);

  const labelHandler = () => {
    setShowLabel((prevState) => !prevState);
  };

  return (
    <button
      className={classes.CircleButtonContainer}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        margin: margin,
      }}
      onClick={onClick}
      type={type}
      onMouseEnter={labelHandler}
      onMouseLeave={labelHandler}
    >
      {icon ? icon : <MdClear />}
      {showLabel && title && <LinkLabel text={title} bottom={-35} />}
    </button>
  );
};

export default CircleButton;
