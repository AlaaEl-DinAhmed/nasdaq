import styled from 'styled-components';
import SearchIcon from '../../assets/icons/icons-search.svg';
const Search = () => {
  const Wrapper = styled.div`
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    padding-inline-start: var(--padding-start);
    position: relative;
  `;
  const Span = styled.span`
    position: absolute;
    left: 47px;
    bottom: 20px;
  `;
  const Image = styled.img`
    width: 80%;
  `;
  const Input = styled.input`
    background-color: #2f9cfe;
    color: var(--color-main-text);
    padding-block: 0.5rem;
    padding-inline-start: 2.5rem;
    padding-inline-end: 1rem;
    border-radius: 4px;
    border: 1px solid transparent;
    line-height: 1;
    ::placeholder {
      color: var(--color-main-text);
    }
    :focus {
      outline: none;
      border-color: #fff;
    }
  `;
  return (
    <Wrapper>
      <Span>
        <Image alt="search icon" src={SearchIcon} />
      </Span>
      <Input
        type="text"
        placeholder="Search"
        enterKeyHint="search"
        inputMode="search"
      />
    </Wrapper>
  );
};

export default Search;
