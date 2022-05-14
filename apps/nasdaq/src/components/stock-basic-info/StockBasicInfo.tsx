import React from 'react';
import P from '../../styled-components/card/Title';

type StockBasicInfoProps = {
  name: string;
  children: JSX.Element;
};

const StockBasicInfo: React.FC<StockBasicInfoProps> = ({ name, children }) => {
  return (
    <>
      {children}
      <P>{name}</P>
    </>
  );
};

export default StockBasicInfo;
