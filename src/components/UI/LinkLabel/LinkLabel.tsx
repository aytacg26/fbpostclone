import classes from './LinkLabel.module.scss';

interface IProps {
  text?: string | string[];
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}

const LinkLabel = ({ text, left, right, top, bottom }: IProps) => {
  let content: any;
  let isList = false;

  if (typeof text === 'string') {
    content = text;
  } else {
    isList = true;
    content = text?.map((t) => <span key={t}>{t}</span>);
  }

  return (
    <label
      className={`${classes.LinkLabel} ${isList ? classes.List : ''}`}
      style={{ top, right, bottom, left }}
    >
      {content}
    </label>
  );
};

export default LinkLabel;
