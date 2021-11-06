import SectionContainer from '../SectionContainer/SectionContainer';
import ProfileImage from '../../ProfileImage/ProfileImage';
import PostButton from '../../PostButton/PostButton';
// import testImage from '../../../../assets/images/testprofileImage.jpg';
// import testImage2 from '../../../../assets/images/test1.png';
// import testImage3 from '../../../../assets/images/test2.jpg';
import testImage4 from '../../../../assets/images/aytacguley.jpg';

const CreatePostSection = () => {
  const postButtonClickHandler = () => {
    console.log('Open Post model...');
  };

  return (
    <SectionContainer hasBottomBorder>
      <ProfileImage
        image={testImage4}
        username='Aytac Guley'
        width='40'
        height='40'
      />
      <PostButton username='Aytac' onClick={postButtonClickHandler} />
    </SectionContainer>
  );
};

export default CreatePostSection;
