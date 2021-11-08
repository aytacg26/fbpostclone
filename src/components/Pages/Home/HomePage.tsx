import LeftMenu from '../../UI/LeftMenu/LeftMenu';
import StoryContainer from '../../UI/StoryContainer/StoryContainer';

import RightMenu from '../../UI/RightMenu/RightMenu';
import PostSelect from './PostSelect/PostSelect';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.mainContentContainer}>
      <LeftMenu />
      <div className={classes.postsSection}>
        <StoryContainer />
        <PostSelect />
      </div>
      <RightMenu />
    </div>
  );
};

export default HomePage;
