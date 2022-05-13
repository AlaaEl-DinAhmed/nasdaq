import React from 'react';
import styled from 'styled-components';
import { API_KEY } from '../../constants/API';

type Avatar = {
  src: string;
  alt: string;
  width: number;
  fallback: string;
};

const Avatar: React.FC<Avatar> = ({ src, alt, width, fallback }) => {
  const imageSrc = `${src}?apiKey=${API_KEY}`;
  const imageWidth = `${width}%`;

  const Image = styled.img`
    width: ${imageWidth};
  `;

  return <Image src={src ? imageSrc : fallback} alt={alt} />;
};

export default Avatar;
