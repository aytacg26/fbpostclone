import React from 'react';
import classes from './PostSelectContainer.module.scss';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const PostSelectContainer = ({ children }: IProps) => {
  return <div className={classes.postSelectContainer}>{children}</div>;
};

export default PostSelectContainer;
