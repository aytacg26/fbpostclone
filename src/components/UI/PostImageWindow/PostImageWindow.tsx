import classes from './PostImageWindow.module.scss';

const sampleImages = [
  {
    id: 'img-0001',
    url: 'https://i.ibb.co/GsF8P0n/amsterdam-6744567-1920.jpg',
    title: 'amsterdam-6744567-1920',
  },
  {
    id: 'img-0002',
    url: 'https://i.ibb.co/LCZVQsx/cartoon-5266407-1920.png',
    title: 'cartoon-5266407-1920',
  },
  //   {
  //     id: 'img-0003',
  //     url: 'https://i.ibb.co/gd35TC1/cat-6748193-1920.jpg',
  //     title: 'cat-6748193-1920',
  //   },
  //   {
  //     id: 'img-0004',
  //     url: 'https://i.ibb.co/7nynb78/dog-5040008-1920.jpg',
  //     title: 'dog-5040008-1920',
  //   },
  //   {
  //     id: 'img-0005',
  //     url: 'https://i.ibb.co/mbG6xPb/field-6574455-1920.jpg',
  //     title: 'field-6574455-1920',
  //   },
  //   {
  //     id: 'img-0006',
  //     url: 'https://i.ibb.co/jyB8Q3Q/hamburg-4570577-1920.jpg',
  //     title: 'hamburg-4570577-1920',
  //   },
  //   {
  //     id: 'img-0007',
  //     url: 'https://i.ibb.co/bKjtq5D/lake-6701636-1920.jpg',
  //     title: 'lake-6701636-1920',
  //   },
  //   {
  //     id: 'img-0008',
  //     url: 'https://i.ibb.co/Cn5CYnL/people-6545894-1920.jpg',
  //     title: 'people-6545894-1920',
  //   },
  //   {
  //     id: 'img-0009',
  //     url: 'https://i.ibb.co/6y6pKtb/portrait-6595821-1920.jpg',
  //     title: 'portrait-6595821-1920',
  //   },
  //   {
  //     id: 'img-0010',
  //     url: 'https://i.ibb.co/GF6Rj8V/tree-5480239-1920.jpg',
  //     title: 'tree-5480239-1920',
  //   },
  //   {
  //     id: 'img-0011',
  //     url: 'https://i.ibb.co/HBQrB6X/woman-6023442-1920.jpg',
  //     title: 'woman-6023442-1920',
  //   },
];

//TODO : Most Hard Part, it should form itself automatically according to number of images
//to make it highly responsive to the height and width of the images, image data should be
//supplied. till 5th image it has 6 different structures and after 5th, it need to show +number of images
//on click, it should also open a modal which will also be a image slider.
//(Same stucture idea exist (except modal) while uploading images)
const PostImageWindow = () => {
  return (
    <div className={classes.WindowContainer}>
      {sampleImages.map((img) => (
        <img src={img.url} alt={img.title} key={img.id} title={img.title} />
      ))}
    </div>
  );
};

export default PostImageWindow;
