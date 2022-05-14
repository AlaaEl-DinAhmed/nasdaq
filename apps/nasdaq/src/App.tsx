import React from 'react';
import Search from './components/search/Search';
import Explore from './layouts/explore/Explore';
import SearchHeader from './styled-components/SearchHeader';
import SearchWrapper from './styled-components/SearchWrapper';

export const App = () => {
  return (
    <React.Fragment>
      <SearchHeader>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      </SearchHeader>
      <Explore />
    </React.Fragment>
  );
};

export default App;
