import styled from 'styled-components';

type PrevCloseProps = {
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
};

const PrevClose: React.FC<PrevCloseProps> = ({
  open,
  close,
  volume,
  high,
  low,
}) => {
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
          <StatisticsValue>{open}</StatisticsValue>
        </StatisticsContent>
        <StatisticsContent>
          <StatisticsTitle>Close</StatisticsTitle>
          <StatisticsValue>{close}</StatisticsValue>
        </StatisticsContent>
        <StatisticsContent>
          <StatisticsTitle>Volume</StatisticsTitle>
          <StatisticsValue>{volume}</StatisticsValue>
        </StatisticsContent>
        <StatisticsContent>
          <StatisticsTitle>High</StatisticsTitle>
          <StatisticsValue>{high}</StatisticsValue>
        </StatisticsContent>
        <StatisticsContent>
          <StatisticsTitle>Low</StatisticsTitle>
          <StatisticsValue>{low}</StatisticsValue>
        </StatisticsContent>
      </StatisticsWrapper>
    </>
  );
};

export default PrevClose;
