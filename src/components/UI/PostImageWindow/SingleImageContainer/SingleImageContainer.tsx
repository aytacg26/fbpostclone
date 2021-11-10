import { image } from '../../../../types/dataTypes';
import classes from './SingleImageContainer.module.scss';

interface IProps {
  image: image;
}

const SingleImageContainer = ({ image }: IProps) => {
  const wrapperWidth = image.isPortraitImage
    ? 'calc((100vh + -325px) * 0.66667)'
    : 'calc((100vh + -325px) * 1.5)';
  const paddingTop = image.isPortraitImage ? '150%' : '66.6667%';

  return (
    <div className={classes.singleImageContainer}>
      <div>
        <a className={classes.ImageLink} href='#!'>
          <div
            className={classes.MainWrapper}
            style={{ backgroundColor: 'black' }}
          >
            <div
              style={{
                maxWidth: '100%',
                minWidth: '500px',
                width: wrapperWidth,
              }}
            >
              <div
                className={classes.imageRootWrapper}
                style={{ paddingTop: paddingTop }}
              >
                <div
                  className={classes.imageWrapper}
                  style={{ height: 'calc(100.04%)', top: '0%', width: '100%' }}
                >
                  <img
                    height={image.height}
                    width={image.width}
                    alt={image.title}
                    className={classes.image}
                    src={image.url}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.Borders}></div>
          <div className={classes.MainWrapperSupporter}></div>
        </a>
      </div>
    </div>
  );
};

export default SingleImageContainer;
