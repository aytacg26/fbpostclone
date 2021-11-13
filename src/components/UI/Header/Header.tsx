import HeaderSearchSection from './HeaderSearchSection/HeaderSearchSection';
import HeaderPagesMenu from './HeaderPagesMenu/HeaderPagesMenu';
import HeaderRightSection from './HeaderRightSection/HeaderRightSection';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <HeaderSearchSection />
      <HeaderPagesMenu />
      <HeaderRightSection />
    </div>
  );
};

export default Header;
