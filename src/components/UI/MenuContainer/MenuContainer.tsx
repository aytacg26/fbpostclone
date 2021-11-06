import classes from './MenuContainer.module.scss';

interface IProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const MenuContainer = ({ children }: IProps) => {
  return <div className={classes.MenuContainer}>{children}</div>;
};

export default MenuContainer;
