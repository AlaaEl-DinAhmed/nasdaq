import React from 'react';
import styled from 'styled-components';
import Search from './components/search/Search';
import Explore from './layouts/explore/Explore';

export const App = () => {
  const Header = styled.header`
    background-color: var(--color-main-background);
  `;
  return (
    <React.Fragment>
      <Header>
        <Search />
      </Header>
      <Explore />
    </React.Fragment>
  );
};

export default App;
