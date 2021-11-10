import {
  analyzeImages,
  assignWindowTopPadding,
  assignStyleToImages,
} from '../../../utils/utils';
import PostImageContainer from './PostImageContainer/PostImageContainer';
import SingleImageContainer from './SingleImageContainer/SingleImageContainer';
import classes from './PostImageWindow.module.scss';

const sampleImages = [
  {
    id: 'img-0001',
    url: 'https://i.ibb.co/GsF8P0n/amsterdam-6744567-1920.jpg',
    title: 'amsterdam-6744567-1920',
    width: '1920',
    height: '1367',
  },
  {
    id: 'img-0002',
    url: 'https://i.ibb.co/LCZVQsx/cartoon-5266407-1920.png',
    title: 'cartoon-5266407-1920',
    width: '1920',
    height: '1920',
  },
  {
    id: 'img-0003',
    url: 'https://i.ibb.co/gd35TC1/cat-6748193-1920.jpg',
    title: 'cat-6748193-1920',
    width: '1280',
    height: '1920',
  },
  {
    id: 'img-0004',
    url: 'https://i.ibb.co/7nynb78/dog-5040008-1920.jpg',
    title: 'dog-5040008-1920',
    width: '1920',
    height: '1280',
  },
  // {
  //   id: 'img-0005',
  //   url: 'https://i.ibb.co/mbG6xPb/field-6574455-1920.jpg',
  //   title: 'field-6574455-1920',
  //   width: '1920',
  //   height: '1278',
  // },
  // {
  //   id: 'img-0006',
  //   url: 'https://i.ibb.co/jyB8Q3Q/hamburg-4570577-1920.jpg',
  //   title: 'hamburg-4570577-1920',
  //   width: '1920',
  //   height: '1280',
  // },
  // {
  //   id: 'img-0007',
  //   url: 'https://i.ibb.co/bKjtq5D/lake-6701636-1920.jpg',
  //   title: 'lake-6701636-1920',
  //   width: '1920',
  //   height: '1280',
  // },
  // {
  //   id: 'img-0008',
  //   url: 'https://i.ibb.co/Cn5CYnL/people-6545894-1920.jpg',
  //   title: 'people-6545894-1920',
  //   width: '1920',
  //   height: '1280',
  // },
  // {
  //   id: 'img-0009',
  //   url: 'https://i.ibb.co/6y6pKtb/portrait-6595821-1920.jpg',
  //   title: 'portrait-6595821-1920',
  //   width: '1280',
  //   height: '1920',
  // },
  // {
  //   id: 'img-0010',
  //   url: 'https://i.ibb.co/GF6Rj8V/tree-5480239-1920.jpg',
  //   title: 'tree-5480239-1920',
  //   width: '1920',
  //   height: '1280',
  // },
  {
    id: 'img-0011',
    url: 'https://i.ibb.co/HBQrB6X/woman-6023442-1920.jpg',
    title: 'woman-6023442-1920',
    width: '1920',
    height: '1280',
  },
  // {
  //   id: 'img-0012',
  //   url: 'https://i.ibb.co/865dgYd/2-picasso-self-portrait.jpg',
  //   title: '2-picasso-self-portrait',
  //   width: '750',
  //   height: '1081',
  // },
  // {
  //   id: 'img-0013',
  //   url: 'https://i.ibb.co/1GzS4gc/3-picasso-self-portrait.jpg',
  //   title: '3-picasso-self-portrait',
  //   width: '750',
  //   height: '1050',
  // },
  // {
  //   id: 'img-0014',
  //   url: 'https://i.ibb.co/bQv7Ys4/4-picasso-self-portrait.jpg',
  //   title: '4-picasso-self-portrait',
  //   width: '750',
  //   height: '1029',
  // },
];

const PostImageWindow = () => {
  const totalNumberOfImages = sampleImages.length;
  const imagesToUse = analyzeImages(sampleImages);
  const windowPadding =
    totalNumberOfImages > 1
      ? assignWindowTopPadding(
          imagesToUse.analyzedImages.length,
          imagesToUse.numberOfPortraits
        )
      : 0;
  const imagesWithStyles = assignStyleToImages(
    imagesToUse.numberOfPortraits,
    imagesToUse.analyzedImages
  );

  let imageWindow;

  if (totalNumberOfImages === 1) {
    imageWindow = (
      <SingleImageContainer image={imagesToUse.analyzedImages[0]} />
    );
  } else {
    imageWindow = imagesWithStyles?.map((image, index) => (
      <PostImageContainer
        image={image.image}
        style={image.styles}
        key={image.image.id}
        showExcess={index === 4 && totalNumberOfImages > 5}
        excessNumber={totalNumberOfImages - 5}
      />
    ));
  }

  return (
    <div
      className={classes.WindowContainer}
      style={{ paddingTop: `${windowPadding}%` }}
    >
      {imageWindow}
    </div>
  );
};

export default PostImageWindow;
