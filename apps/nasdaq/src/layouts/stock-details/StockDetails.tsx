import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AboutTicker from '../../components/about/AboutTicker';
import PrevClose from '../../components/prev-close/PrevClose';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';
import { useActions, useAppState } from '../../overmind/stocks';

const StockDetails = () => {
  const Section = styled.section`
    background-color: var(--color-secondary-background);
    height: 100vh;
  `;
  const Span = styled.span`
    display: block;
    padding-block: 1rem;
    padding-inline: var(--padding-start);
  `;
  const StockPrevCloseWrapper = styled.article`
    background-color: var(--color-background);
    padding-block: 1rem;
    padding-inline: var(--padding-start);
  `;

  const StockAbout = styled.article`
    padding-block: 1rem;
    padding-inline: var(--padding-start);
  `;

  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const { singleStockState, prevCloseState } = useAppState();
  const { getTickerDetails, getPrevClose } = useActions();

  useEffect(() => {
    getTickerDetails(id);
    getPrevClose(id);
  }, [getTickerDetails, getPrevClose, id]);
  return (
    <Section>
      <Span>
        <StockBasicInfo {...singleStockState.singleStock}>
          <h1>{singleStockState.singleStock.ticker}</h1>
        </StockBasicInfo>
      </Span>
      <StockPrevCloseWrapper>
        <PrevClose {...prevCloseState.tickerPrevClose} />
      </StockPrevCloseWrapper>
      <StockAbout>
        <AboutTicker />
      </StockAbout>
      <button type="button" onClick={() => navigate('/')}>
        Go back to home page
      </button>
    </Section>
  );
};

export default StockDetails;
