import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AboutTicker from '../../components/about/AboutTicker';
import PrevClose from '../../components/prev-close/PrevClose';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';
import { useActions, useAppState } from '../../overmind/stocks';

const StockDetails = () => {
  const StockPrevCloseWrapper = styled.section`
    background-color: var(--color-background);
    padding-block: 1rem;
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
    <div>
      <StockBasicInfo {...singleStockState.singleStock}>
        <h1>{singleStockState.singleStock.ticker}</h1>
      </StockBasicInfo>
      <StockPrevCloseWrapper>
        <PrevClose {...prevCloseState.tickerPrevClose} />
      </StockPrevCloseWrapper>
      <AboutTicker />
      <button type="button" onClick={() => navigate('/')}>
        Go back to home page
      </button>
    </div>
  );
};

export default StockDetails;
