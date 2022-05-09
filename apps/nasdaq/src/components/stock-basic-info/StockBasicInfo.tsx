import React from 'react';
import styled from 'styled-components';

type StockBasicInfo = {
  ticker: string;
  name: string;
};

const StockBasicInfo: React.FC<StockBasicInfo> = ({ ticker, name }) => {
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
      <H2>{ticker}</H2>
      <P>{name}</P>
    </React.Fragment>
  );
};

export default StockBasicInfo;
