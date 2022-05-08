import styled from 'styled-components';

type StockBasicInfo = {
  ticker: string;
  name: string;
};

const StockBasicInfo = () => {
  const Wrapper = styled.article``;
  const H2 = styled.h2``;
  const P = styled.p``;
  return (
    <Wrapper>
      <H2>Tikcer</H2>
      <P>Name</P>
    </Wrapper>
  );
};

export default StockBasicInfo;
