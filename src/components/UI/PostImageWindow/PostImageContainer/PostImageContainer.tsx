import { image, styleOption } from '../../../../types/dataTypes';
import classes from './PostImageContainer.module.scss';

interface IProps {
  image: image;
  style?: styleOption;
  showExcess?: boolean;
  excessNumber?: number;
}

const PostImageContainer = ({
  image,
  style,
  showExcess,
  excessNumber,
}: IProps) => {
  return (
    <div className={classes.imageContainer} style={style?.imageContainerStyle}>
      <a href='#!' className={classes.ImageLink}>
        <div className={classes.imageFlows}>
          <div style={style?.wrapperStyle} className={classes.wrapper}>
            <div className={classes.root} style={style?.rootStyle}>
              <img
                src={image.url}
                alt={image.title}
                title={image.title}
                className={classes.Image}
              />
            </div>
          </div>
          <div className={classes.bottomSupport}></div>
        </div>
        {showExcess && (
          <div className={classes.NumberOfExcessImages}>
            <div className={classes.excessNumber}>{`+${excessNumber}`}</div>
          </div>
        )}
        <div
          className={classes.flowSupporter}
          data-visualcompletion='ignore'
        ></div>
      </a>
    </div>
  );
};

export default PostImageContainer;
