import { useActions } from '../../overmind/stocks';
import SearchInput from '../../styled-components/search/Search';
const Search = () => {
  const { searchStocks } = useActions();

  const searchAllStocks = (event: any) => {
    searchStocks(event.target.value);
  };

  return (
    <SearchInput
      type="text"
      placeholder="Search"
      enterKeyHint="search"
      inputMode="search"
      onChange={searchAllStocks}
    />
  );
};

export default Search;
