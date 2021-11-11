import { image, entity } from '../types/dataTypes';

export const analyzeImages = (images: image[]) => {
  const arrayLength = images.length < 5 ? images.length : 5;
  const isPortrait = (width: number, height: number) => {
    return width < height && width / height <= 0.75;
  };
  let numberOfPortraits = 0;
  let numberOfLandscapes = 0;
  let analyzedImages: image[] = [];

  for (let i = 0; i < arrayLength; i++) {
    const isPortraitImage = isPortrait(
      Number(images[i].width),
      Number(images[i].height)
    );

    if (isPortraitImage) {
      numberOfPortraits++;
    } else {
      numberOfLandscapes++;
    }

    const analyzedImage = { ...images[i], isPortraitImage };

    analyzedImages.push(analyzedImage);
  }

  //Put all portraits to the beginning of the array
  analyzedImages.sort(
    (a, b) => Number(b.isPortraitImage) - Number(a.isPortraitImage)
  );

  return { analyzedImages, numberOfPortraits, numberOfLandscapes };
};

//This will assign the paddingTop of Post Image Window
export const assignWindowTopPadding = (
  numberOfImages: number,
  numberOfPortraits: number
) => {
  if (numberOfImages === 2 && numberOfPortraits === 1) {
    return 50;
  } else if (numberOfImages >= 5 && numberOfPortraits >= 4) {
    return 83.3333333;
  } else {
    return 100;
  }
};

const styleOptionResult = (numberOfPortraits: number) => {
  switch (numberOfPortraits) {
    case 0:
      return '0P';

    case 1:
      return '1P';

    case 2:
      return '2P';
    case 3:
      return '3P';
    case 4:
      return '4P';

    default:
      return '5P';
  }
};

//P: Portrait, "e.g. 1P = 1 Portrait", L: Landscape "e.g. 2L means 2 Landscape Images"
const styles = [
  {
    '0P': [
      {
        imageContainerStyle: {
          inset: 'calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)',
        },
        wrapperStyle: { paddingTop: '50%' },
        rootStyle: { height: 'calc(133.333%)', top: '0%', width: '100%' },
      },

      {
        imageContainerStyle: {
          inset: 'calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)',
        },
        wrapperStyle: {
          paddingTop: '50%',
        },
        rootStyle: { height: 'calc(133.185%)', top: '0%', width: '100%' },
      },
    ],

    '1P': [
      {
        imageContainerStyle: {
          inset:
            'calc(0% + 0px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)',
        },
        wrapperStyle: { paddingTop: '100%' },
        rootStyle: { height: 'calc(150%)', top: '0%', width: '100%' },
      },

      {
        imageContainerStyle: {
          inset:
            'calc(0% + 0px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)',
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: { height: 'calc(150%)', top: '0%', width: '100%' },
      },
    ],

    '2P': [
      {
        imageContainerStyle: {
          inset:
            'calc(0% + 0px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)',
        },
        wrapperStyle: { paddingTop: '200%' },
        rootStyle: {
          height: '100%',
          left: '-19.4143%',
          width: 'calc(138.829%)',
        },
      },

      {
        imageContainerStyle: {
          inset:
            'calc(0% + 0px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)',
        },
        wrapperStyle: {
          paddingTop: '200%',
        },
        rootStyle: {
          height: '100%',
          left: '-21.4286%',
          width: 'calc(142.857%)',
        },
      },
    ],
  },

  {
    //Portrait should be on the left:
    '0P': [
      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(33.3333% + 1.01px)`,
        },
        wrapperStyle: { paddingTop: '66.6667%' },
        rootStyle: {
          height: '100%',
          left: '-0.0555556%',
          width: 'calc(100.111%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(50% + 1.01px) calc(0% + 0px)
                  calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
                  calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: { height: '100%', left: '0%', width: 'calc(100%)' },
      },
    ],

    '1P': [
      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(33.3333% + 1.01px)`,
        },
        wrapperStyle: { paddingTop: '66.6667%' },
        rootStyle: { height: 'calc(225%)', top: '-24.25%', width: '100%' },
      },

      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(50% + 1.01px) calc(0% + 0px)
                    calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '-0.0555556%',
          width: 'calc(100.111%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
                    calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: { height: '100%', left: '0%', width: 'calc(100%)' },
      },
    ],

    '2P': [
      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(33.3333% + 1.01px) calc(0% + 0px)
                    calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '150%' },
        rootStyle: { height: '100%', left: '0%', width: 'calc(100%)' },
      },

      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)
                    calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '150%',
        },
        rootStyle: { height: '100%', left: '-62.5%', width: 'calc(225%)' },
      },
      {
        imageContainerStyle: {
          inset: `calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)
                    calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '150%',
        },
        rootStyle: { height: '100%', top: '0%', width: 'calc(100%)' },
      },
    ],

    '3P': [
      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(33.3333% + 1.01px) calc(0% + 0px)
                      calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '150%' },
        rootStyle: {
          height: '100%',
          left: '-2.06074%',
          width: 'calc(104.121%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)
                    calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '150%',
        },
        rootStyle: { height: '100%', left: '0%', width: 'calc(100%)' },
      },
      {
        imageContainerStyle: {
          inset: `calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)
                    calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '150%',
        },
        rootStyle: { height: '100%', top: '0%', width: 'calc(100%)' },
      },
    ],
  },

  {
    '0P': [
      {
        imageContainerStyle: {
          inset: `calc((0% / 6) + 0px) calc((0% / 6) + 0px) calc((200% / 6) + 1.01px) calc((0% / 6) + 0px)`,
        },
        wrapperStyle: { paddingTop: '66.66666666666667%' },
        rootStyle: {
          height: '100%',
          left: '-0.05555555555555314%',
          width: 'calc(((901 / 600) / 1.5) * 100%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc((400% / 6) + 1.01px) calc((400% / 6) + 1.01px) calc((0% / 6) + 0px) calc((0% / 6) + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(((900 / 600) / 1) * 100%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc((400% / 6) + 1.01px) calc((200% / 6) + 1.01px) calc((0% / 6) + 0px) calc((200% / 6) + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(((900 / 600) / 1) * 100%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc((400% / 6) + 1.01px) calc((0% / 6) + 0px) calc((0% / 6) + 0px) calc((400% / 6) + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(((900 / 600) / 1) * 100%)',
        },
      },
    ],

    '1P': [
      {
        //Should be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(33.3333% + 1.01px)`,
        },
        wrapperStyle: { paddingTop: '66.6667%' },
        rootStyle: {
          height: 'calc(106.785%)',
          top: '0%',
          width: '100%',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(66.6667% + 1.01px) calc(0% + 0px)
          calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(33.3333% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25.0833%',
          width: 'calc(150.167%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
            calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(150%)',
        },
      },
    ],

    '2P': [
      {
        //Must be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(33.3333% + 1.01px) calc(0% + 0px)
            calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '150%' },
        rootStyle: {
          height: '100%',
          left: '-2.06074%',
          width: 'calc(104.121%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)
            calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(33.3333% + 1.01px) calc(0% + 0px) calc(33.3333% + 1.01px)
            calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(150%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
            calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25.0833%',
          width: 'calc(150.167%)',
        },
      },
    ],

    '3P': [
      {
        //Must be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(33.3333% + 1.01px) calc(0% + 0px)
            calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '150%' },
        rootStyle: {
          height: '100%',
          left: '-2.06074%',
          width: 'calc(104.121%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)
            calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(33.3333% + 1.01px) calc(0% + 0px) calc(33.3333% + 1.01px)
            calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(150%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
            calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
    ],

    '4P': [
      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(33.3333% + 1.01px) calc(0% + 0px)
          calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '150%' },
        rootStyle: {
          height: '100%',
          left: '-2.06074%',
          width: 'calc(104.121%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)
          calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(33.3333% + 1.01px) calc(0% + 0px) calc(33.3333% + 1.01px)
          calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(150%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
          calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
    ],
  },

  {
    '0P': [
      {
        //Must be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '100%' },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(150%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25.0833%',
          width: 'calc(150.167%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)
              calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(33.3333% + 1.01px) calc(0% + 0px) calc(33.3333% + 1.01px)
              calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
              calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },
    ],

    '1P': [
      {
        //Must be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '100%' },
        rootStyle: {
          height: 'calc(140%)',
          top: '0%',
          width: '100%',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(150%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '-0.0555556%',
          width: 'calc(100.111%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(33.3333% + 1.01px) calc(0% + 0px) calc(33.3333% + 1.01px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },
    ],

    '2P': [
      {
        //Must be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '100%' },
        rootStyle: {
          height: 'calc(144.062%)',
          top: '0%',
          width: '100%',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(140%)',
          top: '0%',
          width: '100%',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(33.3333% + 1.01px) calc(0% + 0px) calc(33.3333% + 1.01px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '-0.0555556%',
          width: 'calc(100.111%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },
    ],

    '3P': [
      {
        //Must be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '100%' },
        rootStyle: {
          height: 'calc(144.062%)',
          top: '0%',
          width: '100%',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(50% + 1.01px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(140%)',
          top: '0%',
          width: '100%',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: 'calc(225%)',
          top: '-24.25%',
          width: '100%',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(33.3333% + 1.01px) calc(0% + 0px) calc(33.3333% + 1.01px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '0%',
          width: 'calc(100%)',
        },
      },

      {
        imageContainerStyle: {
          inset: `calc(66.6667% + 1.01px) calc(0% + 0px) calc(0% + 0px)
                calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '66.6667%',
        },
        rootStyle: {
          height: '100%',
          left: '-0.0555556%',
          width: 'calc(100.111%)',
        },
      },
    ],

    '4P': [
      {
        //Must be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(50% + 1.01px) calc(40% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '100%' },
        rootStyle: {
          height: 'calc(144.062%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(40% + 1.01px) calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(140%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(60% + 1.01px) calc(66.6667% + 1.01px) calc(0% + 0px)
                calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(60% + 1.01px) calc(33.3333% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: '100%',
          left: '-25%',
          width: 'calc(150%)',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(60% + 1.01px) calc(0% + 0px) calc(0% + 0px)
                calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },

        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
    ],

    '5P': [
      {
        //Must be Portrait
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(50% + 1.01px) calc(40% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: { paddingTop: '100%' },
        rootStyle: {
          height: 'calc(144.062%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(0% + 0px) calc(0% + 0px) calc(40% + 1.01px) calc(50% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(140%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(60% + 1.01px) calc(66.6667% + 1.01px) calc(0% + 0px)
              calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(137.188%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(60% + 1.01px) calc(33.3333% + 1.01px) calc(0% + 0px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
      {
        imageContainerStyle: {
          inset: `calc(60% + 1.01px) calc(0% + 0px) calc(0% + 0px)
              calc(66.6667% + 1.01px)`,
        },
        wrapperStyle: {
          paddingTop: '100%',
        },
        rootStyle: {
          height: 'calc(150%)',
          top: '0%',
          width: '100%',
        },
      },
    ],
  },
];

export const assignStyleToImages = (
  numberOfPortraits: number,
  images: image[]
) => {
  const numberOfImages = images.length;
  let selectedStyle;

  let styleOption: '0P' | '1P' | '2P' | '3P' | '4P' | '5P';
  if (numberOfImages >= 2 && numberOfImages <= 5) {
    const index = numberOfImages - 2;
    const styleGroup = styles[index];

    if (numberOfPortraits >= 0 && numberOfPortraits <= 5 && styleGroup) {
      styleOption = styleOptionResult(numberOfPortraits);
      if (styleGroup[styleOption]) {
        selectedStyle = styleGroup[styleOption];
      }
    }
  }

  if (selectedStyle) {
    const styleAssignedImages = [];
    for (let i = 0; i < images.length; i++) {
      const styleAssigned = { image: images[i], styles: selectedStyle[i] };
      styleAssignedImages.push(styleAssigned);
    }

    return styleAssignedImages;
  }

  return null;
};

const htmlEntities = Object.freeze({
  '@': '&#64;',
  '?': '&#63;',
  '<': '&#60;',
  '>': '&#62;',
  '=': '&#61;',
  ';': '&#59;',
  ':': '&#58;',
  '[': '&#91;',
  ']': '&#93;',
  '\\': '&#92;',
  '(': '&#40;',
  ')': '&#41;',
  '+': '&#43;',
  '%': '&#37;',
  $: '&#36;',
  '#': '&#35;',
  '!': '&#33;',
  '&': '&#38;',
  '*': '&#42;',
  '.': '&#46;',
  ',': '&#44;',
  '-': '&#45;',
  '{': '&#123;',
  '}': '&#125;',
  '~': '&#126;',
  '|': '&#124;',
  '£': '&#163;',
  '€': '&#8364;',
});

export const encodeText = (text: string) => {
  const textArr = text.split('');
  let entitiedText = '';

  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] in htmlEntities) {
      const key: entity = textArr[i] as entity;
      entitiedText += htmlEntities[key];
    } else {
      entitiedText += textArr[i];
    }
  }

  return entitiedText;
};
