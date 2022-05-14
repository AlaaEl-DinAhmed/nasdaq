import React from 'react';
import { API_KEY } from '../../constants/API';
import Image from '../../styled-components/Image';

type Avatar = {
  src: string;
  alt: string;
  width: number;
  fallback: string;
};

const Avatar: React.FC<Avatar> = ({ src, alt, width, fallback }) => {
  const imageSrc = `${src}?apiKey=${API_KEY}`;
  const imgWidth = `${width}%`;

  return <Image src={src ? imageSrc : fallback} alt={alt} width={imgWidth} />;
};

export default Avatar;
