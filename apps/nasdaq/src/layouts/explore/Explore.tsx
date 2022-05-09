import { Stock } from '@alaamu/api-interfaces';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Search from '../../components/search/Search';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';
import { useActions, useAppState } from '../../overmind/stocks';

const Explore = () => {
  const Header = styled.header`
    background-color: var(--color-main-background);
  `;
  const Main = styled.main`
    background-color: var(--color-secondary-background);
  `;
  const Ul = styled.ul`
    padding-inline-start: var(--padding-start);
    padding-inline-end: var(--padding-start);
  `;
  const Li = styled.li`
    padding-block: 1rem;
    border-block-end: 1px solid #fff;
  `;
  const { stocks } = useAppState();
  const { getStocks } = useActions();

  useEffect(() => {
    getStocks();
  }, []);

  return (
    <React.Fragment>
      <Header>
        <Search />
      </Header>
      <Main>
        <Ul>
          {stocks.results.map((stock: Stock, i: number) => (
            <Li key={i}>
              <StockBasicInfo {...stock} />
            </Li>
          ))}
        </Ul>
      </Main>
    </React.Fragment>
  );
};

export default Explore;
