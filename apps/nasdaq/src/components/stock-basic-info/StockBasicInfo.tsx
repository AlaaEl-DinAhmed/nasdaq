import styled from 'styled-components';

type StockBasicInfo = {
  ticker: string;
  name: string;
};

const StockBasicInfo: React.FC<StockBasicInfo> = ({ ticker, name }) => {
  const Wrapper = styled.article``;
  const H2 = styled.h2``;
  const P = styled.p``;
  return (
    <Wrapper>
      <H2>{ticker}</H2>
      <P>{name}</P>
    </Wrapper>
  );
};

export default StockBasicInfo;
