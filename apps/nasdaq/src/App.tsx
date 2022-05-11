import React from 'react';
import styled from 'styled-components';
import Search from './components/search/Search';
import Explore from './layouts/explore/Explore';

export const App = () => {
  const Header = styled.header`
    background-color: var(--color-main-background);
  `;
  const Wrapper = styled.div`
    background-color: var(--color-secondary-background);
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    padding-inline-start: var(--padding-start);
    padding-inline-end: var(--padding-start);
    position: fixed;
    top: 0;
    width: 100%;
  `;

  return (
    <React.Fragment>
      <Header>
        <Wrapper>
          <Search />
        </Wrapper>
      </Header>
      <Explore />
    </React.Fragment>
  );
};

export default App;
