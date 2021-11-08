import HeaderSearchSection from './HeaderSearchSection/HeaderSearchSection';
import HeaderPagesMenu from './HeaderPagesMenu/HeaderPagesMenu';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <HeaderSearchSection />
      <HeaderPagesMenu />
      <div className={classes.headerRight}>Settings Section</div>
    </div>
  );
};

export default Header;
