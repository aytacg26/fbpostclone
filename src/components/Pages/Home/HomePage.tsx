import LeftMenu from '../../UI/LeftMenu/LeftMenu';
import RightMenu from '../../UI/RightMenu/RightMenu';
import CenterContent from '../../UI/CenterContent/CenterContent';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.mainContentContainer}>
      <LeftMenu />
      <CenterContent />
      <RightMenu />
    </div>
  );
};

export default HomePage;
