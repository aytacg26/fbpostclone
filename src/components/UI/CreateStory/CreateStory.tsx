import StoryWindow from '../StoryWindow/StoryWindow';
import { useAppSelector } from '../../../store/hooks';
import { BsPlusLg } from 'react-icons/bs';

import classes from './CreateStory.module.scss';

const CreateStory = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <StoryWindow image={user.profileImage}>
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
