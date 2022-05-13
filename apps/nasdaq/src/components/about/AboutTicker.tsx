import React from 'react';
import styled from 'styled-components';

type AboutTickerProps = {
  link: string;
  industry: string;
  description: string;
};

const AboutTicker: React.FC<AboutTickerProps> = ({
  link,
  industry,
  description,
}) => {
  const H2 = styled.h2`
    color: var(--color-main);
  `;
  const ViewWebsite = styled.a``;
  const Title = styled.p``;
  const Info = styled.p``;

  return (
    <>
      <H2>About</H2>
      <ViewWebsite href={link}>View Website</ViewWebsite>
      <div>
        <div>
          <Title>Title</Title>
          <Info>{industry}</Info>
        </div>
        <Title>Title</Title>
        <Info>{description}</Info>
      </div>
    </>
  );
};

export default AboutTicker;
