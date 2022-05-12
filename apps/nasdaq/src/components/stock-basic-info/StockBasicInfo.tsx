import React from 'react';
import styled from 'styled-components';

type StockBasicInfoProps = {
  name: string;
  children: JSX.Element;
};

const StockBasicInfo: React.FC<StockBasicInfoProps> = ({ name, children }) => {
  const P = styled.p`
    color: var(--color-main);
    font-size: var(--size-secondary-text);
  `;
  return (
    <>
      {children}
      <P>{name}</P>
    </>
  );
};

export default StockBasicInfo;
