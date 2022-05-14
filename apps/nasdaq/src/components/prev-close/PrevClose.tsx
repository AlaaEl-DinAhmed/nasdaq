import H2 from '../../styled-components/prev-close-card/Heading';
import StatisticsContent from '../../styled-components/prev-close-card/Static-Heading';
import StatisticsTitle from '../../styled-components/prev-close-card/StatisticsTitle';
import StatisticsWrapper from '../../styled-components/prev-close-card/StatisticsWrapper';
import StatisticsValue from '../../styled-components/prev-close-card/StatisticValue';

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
