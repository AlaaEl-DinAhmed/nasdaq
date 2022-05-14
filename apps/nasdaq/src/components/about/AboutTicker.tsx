import React from 'react';
import H2 from '../../styled-components/prev-close-card/Heading';
import Info from './IndustryInfo';
import Title from './IndustryTitle';
import IndustryWrapper from './IndustryWrapper';
import ViewWebsite from './ViewWebsiteLink';

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
