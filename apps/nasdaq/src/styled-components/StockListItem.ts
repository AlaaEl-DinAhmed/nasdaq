import styled from 'styled-components';

const StockListItem = styled.li`
  padding-block: 1rem;
  :not(:last-child) {
    border-block-end: 1px solid #3ca7ff;
  }
`;

export default StockListItem;
