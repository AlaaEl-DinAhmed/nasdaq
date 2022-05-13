import styled from 'styled-components';
import { IPrevClose } from '../../interfaces/prev-close.interface';

const PrevClose: React.FC<IPrevClose> = ({ o, c, v, h, l }) => {
  const H2 = styled.h2`
    color: var(--color-main);
    margin-block-end: 1rem;
  `;

  const StatisticsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
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
  const StatisticsTitle = styled.p`
    color: var(--color-main);
    font-size: 1.25rem;
    width: 100%;
  `;
  const StatisticsValue = styled.span`
    color: var(--color-main);
    font-size: 2rem;
    font-weight: 700;
  `;
  return (
    <>
      <H2>Statistics</H2>
      <StatisticsWrapper>
        <StatisticsContent>
          <StatisticsTitle>Open</StatisticsTitle>
          <StatisticsValue>{o}</StatisticsValue>
        </StatisticsContent>
        <StatisticsContent>
          <StatisticsTitle>Close</StatisticsTitle>
          <StatisticsValue>{c}</StatisticsValue>
        </StatisticsContent>
        <StatisticsContent>
          <StatisticsTitle>Volume</StatisticsTitle>
          <StatisticsValue>{v}</StatisticsValue>
        </StatisticsContent>
        <StatisticsContent>
          <StatisticsTitle>High</StatisticsTitle>
          <StatisticsValue>{h}</StatisticsValue>
        </StatisticsContent>
        <StatisticsContent>
          <StatisticsTitle>Low</StatisticsTitle>
          <StatisticsValue>{l}</StatisticsValue>
        </StatisticsContent>
      </StatisticsWrapper>
    </>
  );
};

export default PrevClose;
