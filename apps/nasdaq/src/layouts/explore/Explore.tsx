import { useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Alert from '../../components/alert/Alert';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';
import { IStock } from '../../interfaces/stocks.interface';
import { useActions, useAppState } from '../../overmind/stocks';

const Explore = () => {
  const Main = styled.main`
    background-color: var(--color-background);
    min-height: calc(100vh - 82px);
    margin-block-start: 82px;
  `;
  const Ul = styled.ul`
    padding-inline-start: var(--padding-start);
    padding-inline-end: var(--padding-start);
  `;
  const Li = styled.li`
    padding-block: 1rem;
    :not(:last-child) {
      border-block-end: 1px solid #3ca7ff;
    }
  `;

  const { stocksState } = useAppState();
  const { getStocks, getMoreStocks } = useActions();

  useEffect(() => {
    getStocks();
  }, [getStocks]);

  const fetchMoreStocks = (): void => {
    getMoreStocks(stocksState.nextUrl);
  };

  return (
    <Main>
      <Ul>
        <InfiniteScroll
          dataLength={stocksState.stockList.length}
          next={fetchMoreStocks}
          hasMore={true || false}
          loader={<div className="loader" key={0}></div>}
        >
          {stocksState.stockList?.map((stock: IStock, i: number) => (
            <Li key={i}>
              <Link to={`/stock-details/${stock.ticker}`}>
                <StockBasicInfo {...stock}>
                  <h2>{stock.ticker}</h2>
                </StockBasicInfo>
              </Link>
            </Li>
          ))}
          {stocksState.stocks.status === 'ERROR' && (
            <Alert message="Error occurred please refresh the page."></Alert>
          )}
        </InfiniteScroll>
      </Ul>
    </Main>
  );
};

export default Explore;
