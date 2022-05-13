import React from 'react';
import styled from 'styled-components';

type AboutTickerProps = {
  website: string;
  industry: string;
  description: string;
};

const AboutTicker: React.FC<AboutTickerProps> = ({
  website,
  industry,
  description,
}) => {
  const H2 = styled.h2`
    color: var(--color-main);
    margin-block-end: 1rem;
  `;
  const IndustryWrapper = styled.div`
    margin-block-end: 1rem;
  `;
  const ViewWebsite = styled.a`
    color: var(--color-main);
    font-weight: 700;
    text-decoration: underline;
    position: absolute;
    right: 2rem;
    top: 1rem;
  `;
  const Title = styled.p`
    color: var(--color-main);
    font-size: 1.125rem;
    margin-block-end: 0.25rem;
  `;
  const Info = styled.p`
    color: var(--color-main);
    font-weight: 700;
    line-height: 1.5rem;
  `;
  return (
    <React.Fragment>
      <H2>About</H2>
      <ViewWebsite href={website} target="_blank" rel="noopener">
        View Website
      </ViewWebsite>
      <IndustryWrapper>
        <Title>Industry</Title>
        <Info>{industry}</Info>
      </IndustryWrapper>
      <Title>Description</Title>
      <Info>{description}</Info>
    </React.Fragment>
  );
};

export default AboutTicker;
