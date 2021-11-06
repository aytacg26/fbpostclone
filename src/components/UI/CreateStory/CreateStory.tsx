import StoryWindow from '../StoryWindow/StoryWindow';
import { BsPlusLg } from 'react-icons/bs';
import profile from '../../../assets/images/aytacguley.jpg';

import classes from './CreateStory.module.scss';

const CreateStory = () => {
  return (
    <StoryWindow image={profile}>
      <div className={classes.ButtonSection}>
        <p>
          <BsPlusLg />
        </p>
      </div>
      <div className={classes.CreateTextSection}>
        <p>Create Story</p>
      </div>
    </StoryWindow>
  );
};

export default CreateStory;
