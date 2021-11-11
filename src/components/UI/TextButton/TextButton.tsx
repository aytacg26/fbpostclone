import LinkLabel from '../LinkLabel/LinkLabel';
import classes from './TextButton.module.scss';

interface IProps {
  labelList?: string[];
  showLabel: boolean;
  buttonText: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const TextButton = ({
  labelList,
  showLabel,
  buttonText,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: IProps) => {
  return (
    <button
      className={classes.TextButton}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {buttonText}
      {showLabel &&
        (labelList && labelList.length > 0 ? (
          <LinkLabel text={labelList} top={25} left={-5} />
        ) : (
          <LinkLabel text='There are no public shares' top={25} left={5} />
        ))}
    </button>
  );
};

export default TextButton;
