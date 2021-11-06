import React from 'react';
import logo from '../../../assets/images/Logo_fbclone.png';

interface IProps {
  width: string;
  height: string;
}

const SiteLogo = ({ width, height }: IProps) => {
  return <img src={logo} alt='site logo' width={width} height={height} />;
};

export default SiteLogo;
