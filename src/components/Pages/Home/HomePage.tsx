import LeftMenu from '../../UI/LeftMenu/LeftMenu';
import StoryContainer from '../../UI/StoryContainer/StoryContainer';
import RightMenu from '../../UI/RightMenu/RightMenu';
import PostSelect from './PostSelect/PostSelect';
import PostPresentationWindow from '../../UI/PostPresentationWindow/PostPresentationWindow';

//just for test purpose
import PostImageWindow from '../../UI/PostImageWindow/PostImageWindow';

import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.mainContentContainer}>
      <LeftMenu />
      <div className={classes.postsSection}>
        <StoryContainer />
        <PostSelect />
        <div style={{ marginTop: '10px', maxHeight: '100%' }}>
          <PostPresentationWindow />
        </div>
        <div className={classes.endOfSection}></div>
      </div>
      <RightMenu />
    </div>
  );
};

export default HomePage;
