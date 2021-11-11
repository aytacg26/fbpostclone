import SectionContainer from '../SectionContainer/SectionContainer';
import MenuButton from '../../MenuButton/MenuButton';
import { RiLiveFill, RiEmotionLine } from 'react-icons/ri';
import { IoMdPhotos } from 'react-icons/io';

const PostOptions = [
  {
    id: 'post-option-00001',
    title: 'Live Video',
    iconColor: '#f3425f',
    isCentered: true,
    icon: <RiLiveFill />,
  },
  {
    id: 'post-option-00002',
    title: 'Photo/Video',
    iconColor: '#45bd62',
    isCentered: true,
    icon: <IoMdPhotos />,
  },
  {
    id: 'post-option-00003',
    title: 'Feeling/Activity',
    iconColor: '#f7b928',
    isCentered: true,
    icon: <RiEmotionLine />,
  },
];

const PostOptionsSection = () => {
  const menuButtonClickHandler = (id: string) => {
    console.log('Handler in PostOptionsSection with an id : ', id);
  };

  return (
    <SectionContainer>
      {PostOptions.map((postOption) => (
        <MenuButton
          {...postOption}
          key={postOption.id}
          onClick={menuButtonClickHandler}
          margin={2}
        />
      ))}
    </SectionContainer>
  );
};

export default PostOptionsSection;
