import classes from './LinkLabel.module.scss';

interface IProps {
  text?: string;
}

const LinkLabel = ({ text }: IProps) => {
  return <label className={classes.LinkLabel}>{text}</label>;
};

export default LinkLabel;
