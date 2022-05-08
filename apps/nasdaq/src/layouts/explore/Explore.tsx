import React from 'react';
import styled from 'styled-components';
import Search from '../../components/search/Search';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';

const Explore = () => {
  const Header = styled.header`
    background-color: var(--color-main-background);
  `;
  const Main = styled.main`
    background-color: var(--color-secondary-background);
    height: 100vh;
  `;
  const Ul = styled.ul`
    padding-inline-start: var(--padding-start);
  `;
  const Li = styled.li``;
  return (
    <React.Fragment>
      <Header>
        <Search />
      </Header>
      <Main>
        <Ul>
          <Li>
            <StockBasicInfo />
          </Li>
        </Ul>
      </Main>
    </React.Fragment>
  );
};

export default Explore;
