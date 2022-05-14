import styled from 'styled-components';
import StatisticsWrapper from './StatisticsWrapper';

const StatisticsContent = styled(StatisticsWrapper)`
  flex-basis: 30%;
  flex-grow: 1;

  :last-child {
    flex-grow: 11;
  }
  :not(:nth-last-child(-1n + 2)) {
    margin-block-end: 1rem;
  }
`;

export default StatisticsContent;
