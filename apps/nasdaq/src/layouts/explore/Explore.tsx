import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Alert from '../../components/alert/Alert';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';
import { IStock } from '../../interfaces/stocks.interface';
import { useActions, useAppState } from '../../overmind/stocks';
import TickerTitle from '../../styled-components/card/Heading';
import Main from '../../styled-components/elements/Main';
import Ul from '../../styled-components/elements/Ul';
import NoResultsFound from '../../styled-components/NoResultsFound';
import StockListItem from '../../styled-components/StockListItem';

const Explore = () => {
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
            <StockListItem key={i}>
              <Link to={`/stock-details/${stock.ticker}`}>
                <StockBasicInfo {...stock}>
                  <TickerTitle>{stock.ticker}</TickerTitle>
                </StockBasicInfo>
              </Link>
            </StockListItem>
          ))}
          {stocksState.stocks.status === 'ERROR' && (
            <Alert message="Error occurred please refresh the page."></Alert>
          )}
        </InfiniteScroll>
        {stocksState.stockList.length === 0 &&
          stocksState.stocks.status === 'OK' && (
            <NoResultsFound>No results found</NoResultsFound>
          )}
      </Ul>
    </Main>
  );
};

export default Explore;
