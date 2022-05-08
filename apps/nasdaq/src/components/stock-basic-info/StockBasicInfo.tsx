import React from 'react';
import styled from 'styled-components';

type StockBasicInfo = {
  ticker: string;
  name: string;
};

const StockBasicInfo = () => {
  const H2 = styled.h2`
    color: var(--color-main-text);
    font-size: var(--size-main-text);
  `;
  const P = styled.p`
    color: var(--color-main-text);
    font-size: var(--size-secondary-text);
  `;
  return (
    <React.Fragment>
      <H2>Ticker</H2>
      <P>Name</P>
    </React.Fragment>
  );
};

export default StockBasicInfo;
