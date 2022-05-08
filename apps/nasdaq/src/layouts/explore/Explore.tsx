import styled from 'styled-components';
import Search from '../../components/search/Search';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';

const Explore = () => {
  const Wrapper = styled.article``;
  return (
    <Wrapper>
      <Search />
      <StockBasicInfo />
    </Wrapper>
  );
};

export default Explore;
