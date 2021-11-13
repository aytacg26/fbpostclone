import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment, ILike } from '../../../interfaces/IPost';
import IPostState from '../../../interfaces/IPostState';
// import type { RootState } from '../../store';

//TODO : Convert this to structure which will be able to talk any RESTapi or GraphQL backend.
//We must use postApi which will hold createAsyncThunk async actions.
//This not the correct way to handle the state for posts as we will fetch them from DB, but currently
//we will not use any DB, therefore we will handle them by following this way.

const initialState: IPostState = {
  posts: [
    {
      id: 'post-000001',
      createdAt: new Date(2021, 9, 13, 18, 29, 52),
      createdBy: {
        id: 'aytac.guley127',
        name: 'Aytac',
        surname: 'Guley',
        profileImage: 'https://i.ibb.co/4P9kggC/aytacguley.jpg',
      },
      postPrivacyType: 'public',
      text: 'This is my first post test',
      images: [
        {
          id: 'img-0008-00124761',
          url: 'https://i.ibb.co/Cn5CYnL/people-6545894-1920.jpg',
          title: 'people-6545894-1920',
          width: '1920',
          height: '1280',
        },
        {
          id: 'img-0009-00293911',
          url: 'https://i.ibb.co/6y6pKtb/portrait-6595821-1920.jpg',
          title: 'portrait-6595821-1920',
          width: '1280',
          height: '1920',
        },
        {
          id: 'img-0010-00293918',
          url: 'https://i.ibb.co/GF6Rj8V/tree-5480239-1920.jpg',
          title: 'tree-5480239-1920',
          width: '1920',
          height: '1280',
        },
      ],
      likes: [
        {
          id: 'like-000001',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(2021, 0, 15, 12, 35, 50),
          likeType: 'like',
        },
        {
          id: 'like-000002',
          reactionBy: {
            id: 'user-000009',
            name: 'Elon',
            surname: 'Musk',
            profileImage: 'https://i.ibb.co/gtf2fWp/elonmusk.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 38, 10),
          likeType: 'like',
        },
        {
          id: 'like-000003',
          reactionBy: {
            id: 'user-000015',
            name: 'Bill',
            surname: 'Gates',
            profileImage: 'https://i.ibb.co/K5p4LxF/billgates.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 39, 15),
          likeType: 'haha',
        },
        {
          id: 'like-000004',
          reactionBy: {
            id: 'user-000025',
            name: 'Sylvester',
            surname: 'Stallone',
            profileImage: 'https://i.ibb.co/k0k9RyC/sylvester-stallone.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 40, 15),
          likeType: 'wow',
        },
        {
          id: 'like-000005',
          reactionBy: {
            id: 'user-000055',
            name: 'Brad',
            surname: 'Pitt',
            profileImage: 'https://i.ibb.co/SKrm58s/BradPitt.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 42, 18),
          likeType: 'heart',
        },
        {
          id: 'like-000006',
          reactionBy: {
            id: 'user-000178',
            name: 'Julia',
            surname: 'Roberts',
            profileImage: 'https://i.ibb.co/XDK7swn/Julia-Roberts.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 45, 18),
          likeType: 'heart',
        },
      ],
      comments: [
        {
          id: 'comment-00001201',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(),
          text: 'This my test comment 1',
          likes: [],
          replies: [],
        },
        {
          id: 'comment-00001202',
          reactionBy: {
            id: 'user-000178',
            name: 'Julia',
            surname: 'Roberts',
            profileImage: 'https://i.ibb.co/XDK7swn/Julia-Roberts.jpg',
          },
          isFriend: true,
          createdAt: new Date(),
          text: 'This comment is from Julia Roberts, this is also a test comment',
          likes: [],
          replies: [],
        },
        {
          id: 'comment-00001202',
          reactionBy: {
            id: 'user-000055',
            name: 'Brad',
            surname: 'Pitt',
            profileImage: 'https://i.ibb.co/SKrm58s/BradPitt.jpg',
          },
          isFriend: true,
          createdAt: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a aliquet lacus, et ultrices metus. Mauris varius, massa eu mollis faucibus, urna quam interdum velit, sit amet consequat odio libero sed ipsum. Ut nec dignissim urna. Aenean ut pharetra sapien. Vestibulum vulputate ipsum et tincidunt volutpat. Proin vulputate, tellus sit amet suscipit euismod, odio eros malesuada diam, id commodo enim elit at arcu. Proin faucibus maximus maximus. `,
          likes: [],
          replies: [],
        },
      ],
      shares: [
        {
          id: 'share-000001',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(2021, 9, 15, 11, 30, 34),
        },
        {
          id: 'share-000002',
          reactionBy: {
            id: 'user-000178',
            name: 'Julia',
            surname: 'Roberts',
            profileImage: 'https://i.ibb.co/XDK7swn/Julia-Roberts.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 9, 18, 10, 14, 21),
        },
      ],
    },
    {
      id: 'post-000002',
      createdAt: new Date(2021, 0, 10, 18, 29, 52),
      createdBy: {
        id: 'aytac.guley127',
        name: 'Aytac',
        surname: 'Guley',
        profileImage: 'https://i.ibb.co/4P9kggC/aytacguley.jpg',
      },
      postPrivacyType: 'friends',
      text: 'This is my first post test',
      images: [
        {
          id: 'img-0011',
          url: 'https://i.ibb.co/HBQrB6X/woman-6023442-1920.jpg',
          title: 'woman-6023442-1920',
          width: '1920',
          height: '1280',
        },
        {
          id: 'img-0012',
          url: 'https://i.ibb.co/865dgYd/2-picasso-self-portrait.jpg',
          title: '2-picasso-self-portrait',
          width: '750',
          height: '1081',
        },
        {
          id: 'img-0013',
          url: 'https://i.ibb.co/1GzS4gc/3-picasso-self-portrait.jpg',
          title: '3-picasso-self-portrait',
          width: '750',
          height: '1050',
        },
        {
          id: 'img-0014',
          url: 'https://i.ibb.co/bQv7Ys4/4-picasso-self-portrait.jpg',
          title: '4-picasso-self-portrait',
          width: '750',
          height: '1029',
        },
      ],
      likes: [
        {
          id: 'like-000001',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(2021, 0, 15, 12, 35, 50),
          likeType: 'like',
        },
        {
          id: 'like-000002',
          reactionBy: {
            id: 'user-000009',
            name: 'Elon',
            surname: 'Musk',
            profileImage: 'https://i.ibb.co/gtf2fWp/elonmusk.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 38, 10),
          likeType: 'like',
        },
        {
          id: 'like-000003',
          reactionBy: {
            id: 'user-000015',
            name: 'Bill',
            surname: 'Gates',
            profileImage: 'https://i.ibb.co/K5p4LxF/billgates.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 39, 15),
          likeType: 'haha',
        },
        {
          id: 'like-000004',
          reactionBy: {
            id: 'user-000025',
            name: 'Sylvester',
            surname: 'Stallone',
            profileImage: 'https://i.ibb.co/k0k9RyC/sylvester-stallone.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 40, 15),
          likeType: 'wow',
        },
      ],
      comments: [
        {
          id: 'comment-00001201',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(),
          text: 'This my test comment for second post',
          likes: [],
          replies: [],
        },
      ],
      shares: [],
    },
    {
      id: 'post-000003',
      createdAt: new Date(2021, 9, 13, 18, 45, 52),
      createdBy: {
        id: 'user-000005',
        name: 'Mark',
        surname: 'Zuckerberg',
        profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
      },
      postPrivacyType: 'group members',
      text: 'This is a post from CEO of Facebook or Meta.',
      images: [
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
      ],
      likes: [
        {
          id: 'like-000001',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(2021, 0, 15, 12, 35, 50),
          likeType: 'like',
        },
        {
          id: 'like-000002',
          reactionBy: {
            id: 'user-000009',
            name: 'Elon',
            surname: 'Musk',
            profileImage: 'https://i.ibb.co/gtf2fWp/elonmusk.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 38, 10),
          likeType: 'like',
        },
        {
          id: 'like-000003',
          reactionBy: {
            id: 'user-000015',
            name: 'Bill',
            surname: 'Gates',
            profileImage: 'https://i.ibb.co/K5p4LxF/billgates.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 39, 15),
          likeType: 'haha',
        },
        {
          id: 'like-000004',
          reactionBy: {
            id: 'user-000025',
            name: 'Sylvester',
            surname: 'Stallone',
            profileImage: 'https://i.ibb.co/k0k9RyC/sylvester-stallone.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 40, 15),
          likeType: 'wow',
        },
        {
          id: 'like-000005',
          reactionBy: {
            id: 'user-000055',
            name: 'Brad',
            surname: 'Pitt',
            profileImage: 'https://i.ibb.co/SKrm58s/BradPitt.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 42, 18),
          likeType: 'heart',
        },
        {
          id: 'like-000006',
          reactionBy: {
            id: 'user-000178',
            name: 'Julia',
            surname: 'Roberts',
            profileImage: 'https://i.ibb.co/XDK7swn/Julia-Roberts.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 45, 18),
          likeType: 'heart',
        },
      ],
      comments: [
        {
          id: 'comment-00001201',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(),
          text: 'This my test comment 1',
          likes: [],
          replies: [],
        },
        {
          id: 'comment-00001202',
          reactionBy: {
            id: 'user-000178',
            name: 'Julia',
            surname: 'Roberts',
            profileImage: 'https://i.ibb.co/XDK7swn/Julia-Roberts.jpg',
          },
          isFriend: true,
          createdAt: new Date(),
          text: 'This comment is from Julia Roberts, this is also a test comment',
          likes: [],
          replies: [],
        },
        {
          id: 'comment-00001202',
          reactionBy: {
            id: 'user-000055',
            name: 'Brad',
            surname: 'Pitt',
            profileImage: 'https://i.ibb.co/SKrm58s/BradPitt.jpg',
          },
          isFriend: true,
          createdAt: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a aliquet lacus, et ultrices metus. Mauris varius, massa eu mollis faucibus, urna quam interdum velit, sit amet consequat odio libero sed ipsum. Ut nec dignissim urna. Aenean ut pharetra sapien. Vestibulum vulputate ipsum et tincidunt volutpat. Proin vulputate, tellus sit amet suscipit euismod, odio eros malesuada diam, id commodo enim elit at arcu. Proin faucibus maximus maximus. `,
          likes: [],
          replies: [],
        },
      ],
      shares: [
        {
          id: 'share-000001',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(2021, 9, 15, 11, 30, 34),
        },
        {
          id: 'share-000002',
          reactionBy: {
            id: 'user-000178',
            name: 'Julia',
            surname: 'Roberts',
            profileImage: 'https://i.ibb.co/XDK7swn/Julia-Roberts.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 10, 18, 10, 14, 21),
        },
      ],
    },
    {
      id: 'post-000004',
      createdAt: new Date(2021, 9, 20, 10, 32, 42),
      createdBy: {
        id: 'user-000178',
        name: 'Julia',
        surname: 'Roberts',
        profileImage: 'https://i.ibb.co/XDK7swn/Julia-Roberts.jpg',
      },
      postPrivacyType: 'friends',
      text: 'This is my first post test',
      images: [
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
        {
          id: 'img-0005',
          url: 'https://i.ibb.co/mbG6xPb/field-6574455-1920.jpg',
          title: 'field-6574455-1920',
          width: '1920',
          height: '1278',
        },
        {
          id: 'img-0006',
          url: 'https://i.ibb.co/jyB8Q3Q/hamburg-4570577-1920.jpg',
          title: 'hamburg-4570577-1920',
          width: '1920',
          height: '1280',
        },
        {
          id: 'img-0007',
          url: 'https://i.ibb.co/bKjtq5D/lake-6701636-1920.jpg',
          title: 'lake-6701636-1920',
          width: '1920',
          height: '1280',
        },
        {
          id: 'img-0008',
          url: 'https://i.ibb.co/Cn5CYnL/people-6545894-1920.jpg',
          title: 'people-6545894-1920',
          width: '1920',
          height: '1280',
        },
        {
          id: 'img-0009',
          url: 'https://i.ibb.co/6y6pKtb/portrait-6595821-1920.jpg',
          title: 'portrait-6595821-1920',
          width: '1280',
          height: '1920',
        },
        {
          id: 'img-0010',
          url: 'https://i.ibb.co/GF6Rj8V/tree-5480239-1920.jpg',
          title: 'tree-5480239-1920',
          width: '1920',
          height: '1280',
        },
        {
          id: 'img-0011',
          url: 'https://i.ibb.co/HBQrB6X/woman-6023442-1920.jpg',
          title: 'woman-6023442-1920',
          width: '1920',
          height: '1280',
        },
        {
          id: 'img-0012',
          url: 'https://i.ibb.co/865dgYd/2-picasso-self-portrait.jpg',
          title: '2-picasso-self-portrait',
          width: '750',
          height: '1081',
        },
        {
          id: 'img-0013',
          url: 'https://i.ibb.co/1GzS4gc/3-picasso-self-portrait.jpg',
          title: '3-picasso-self-portrait',
          width: '750',
          height: '1050',
        },
        {
          id: 'img-0014',
          url: 'https://i.ibb.co/bQv7Ys4/4-picasso-self-portrait.jpg',
          title: '4-picasso-self-portrait',
          width: '750',
          height: '1029',
        },
      ],
      likes: [
        {
          id: 'like-000001',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(2021, 0, 15, 12, 35, 50),
          likeType: 'like',
        },
        {
          id: 'like-000002',
          reactionBy: {
            id: 'user-000009',
            name: 'Elon',
            surname: 'Musk',
            profileImage: 'https://i.ibb.co/gtf2fWp/elonmusk.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 38, 10),
          likeType: 'like',
        },
        {
          id: 'like-000003',
          reactionBy: {
            id: 'user-000015',
            name: 'Bill',
            surname: 'Gates',
            profileImage: 'https://i.ibb.co/K5p4LxF/billgates.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 39, 15),
          likeType: 'haha',
        },
        {
          id: 'like-000004',
          reactionBy: {
            id: 'user-000025',
            name: 'Sylvester',
            surname: 'Stallone',
            profileImage: 'https://i.ibb.co/k0k9RyC/sylvester-stallone.jpg',
          },
          isFriend: true,
          createdAt: new Date(2021, 0, 15, 12, 40, 15),
          likeType: 'wow',
        },
      ],
      comments: [
        {
          id: 'comment-00001201',
          reactionBy: {
            id: 'user-000005',
            name: 'Mark',
            surname: 'Zuckerberg',
            profileImage: 'https://i.ibb.co/sQ1XGXz/markzuckerberg.jpg',
          },
          isFriend: false,
          createdAt: new Date(),
          text: 'This my test comment for second post',
          likes: [],
          replies: [],
        },
      ],
      shares: [],
    },
  ],
  status: null,
};

type newReaction = {
  postId: string;
  like: ILike | IComment;
};

type deleteUpdate = {
  postId: string;
  targetId: string; //this can be userId for likes, commentId for comments
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //add new like to a post, we need postId and Like object as payload
    addNewLike: (state, action: PayloadAction<newReaction>) => {},

    //we need to remove like from a post, we need postId, userId, dispatch of this action
    //will take place according to the userId, if the post has like in the post likes, we need to check
    //if the like type is same, if it is same, we will remove it, if it is not same, we will update it
    removeOrUpdateLike: (state, action: PayloadAction<deleteUpdate>) => {},

    //On a new comment, we will dispatch this action
    addNewComment: (state, action: PayloadAction<newReaction>) => {},

    //delete comment : In this action, we will need postId and commentId to remove the comment from post
    deleteComment: (state, action: PayloadAction<deleteUpdate>) => {},

    //updateComment : In this action, we will update a comment of a post, therefore we will need postId and commentId
    updateComment: (state, action: PayloadAction<deleteUpdate>) => {},

    //add new share to the post, this is a kind of post, we cannot remove it from post but, we need to remove post
    //from the user posts list, each share is a kind of post of a user, and will be added to the list of posts of user
    //and when a user removes it from his/her posts, it will be removed from his/her profile page and also must be removed
    //from ths shares of this post.
    addNewShare: (state, action: PayloadAction<newReaction>) => {},
  },
});

export const {
  addNewLike,
  removeOrUpdateLike,
  addNewComment,
  deleteComment,
  updateComment,
  addNewShare,
} = postSlice.actions;
export default postSlice.reducer;
