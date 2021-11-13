import {
  analyzeImages,
  assignWindowTopPadding,
  assignStyleToImages,
} from '../../../utils/utils';
import PostImageContainer from './PostImageContainer/PostImageContainer';
import SingleImageContainer from './SingleImageContainer/SingleImageContainer';
import classes from './PostImageWindow.module.scss';
import { image } from '../../../types/dataTypes';

interface IProps {
  images?: image[];
}

const PostImageWindow = ({ images }: IProps) => {
  const totalNumberOfImages = images ? images.length : 0;
  const imagesToUse = images ? analyzeImages(images) : null;

  if (!imagesToUse) return null;

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
