import styled from 'styled-components';
import { useActions } from '../../overmind/stocks';
const Search = () => {
  const Input = styled.input`
    background-color: #53aefc;
    color: var(--color-main);
    padding-block: 0.5rem;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    border-radius: var(--input-border-radius);
    border: 1px solid transparent;
    height: 3.125rem;
    width: 100%;
    font-size: 1.125rem;
    ::placeholder {
      color: var(--color-main);
    }
    :focus {
      outline: none;
      border-color: #fff;
    }
  `;

  const { searchStocks } = useActions();

  const searchAllStocks = (event: any) => {
    searchStocks(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Search"
      enterKeyHint="search"
      inputMode="search"
      onChange={searchAllStocks}
    />
  );
};

export default Search;
