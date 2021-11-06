import Story from '../Story/Story';
import CreateStory from '../CreateStory/CreateStory';
import classes from './StoryContainer.module.scss';
import profile from '../../../assets/images/aytacguley.jpg';
import testprofileImage from '../../../assets/images/testprofileImage.jpg';

//Should accomodate 5 story + 1 create Story part
const StoryContainer = () => {
  return (
    <div className={classes.StoryContainer}>
      <CreateStory />
      <Story
        username='Aytac Güley'
        storyImage={testprofileImage}
        userProfileImage={profile}
      />
      <Story
        username='Aytac Güley'
        storyImage={testprofileImage}
        userProfileImage={profile}
      />
      <Story
        username='Aytac Güley'
        storyImage={testprofileImage}
        userProfileImage={profile}
      />
      <Story
        username='Aytac Güley'
        storyImage={testprofileImage}
        userProfileImage={profile}
      />
      <Story
        username='Aytac Güley'
        storyImage={testprofileImage}
        userProfileImage={profile}
      />
    </div>
  );
};

export default StoryContainer;
