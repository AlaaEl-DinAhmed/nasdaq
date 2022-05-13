import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AboutTicker from '../../components/about/AboutTicker';
import Avatar from '../../components/avatar/Avatar';
import PrevClose from '../../components/prev-close/PrevClose';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';
import { useActions, useAppState } from '../../overmind/stocks';

const StockDetails = () => {
  const Section = styled.section`
    background-color: var(--color-secondary-background);
    height: 100vh;
    padding-block-start: 2rem;
  `;
  const TickerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background);
    border-radius: 8px;
    width: 70px;
    height: 60px;
    margin: auto;
  `;
  const Span = styled.span`
    display: block;
    padding-block: 1rem;
    padding-inline: var(--padding-start);
  `;
  const TickerName = styled.h1`
    color: var(--color-main);
  `;
  const StockPrevCloseWrapper = styled.article`
    background-color: var(--color-background);
    padding-block: 1rem;
    padding-inline: var(--padding-start);
  `;
  const StockAbout = styled.article`
    padding-block: 1rem;
    padding-inline: var(--padding-start);
    position: relative;
  `;

  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const { singleStockState, prevCloseState } = useAppState();
  const { getTickerDetails, getPrevClose } = useActions();

  const about = {
    website: singleStockState.singleStock?.homepage_url,
    description: singleStockState.singleStock?.description,
    industry: singleStockState.singleStock?.sic_description,
  };

  const avatar = {
    src: singleStockState.singleStock.branding?.logo_url || '',
    alt: singleStockState.singleStock.ticker,
    width: 80,
    fallback: '../../assets/images/nasdaq-logo.svg',
  };
  useEffect(() => {
    getTickerDetails(id);
    getPrevClose(id);
  }, [getTickerDetails, getPrevClose, id]);
  return (
    <Section>
      <TickerLogo>
        <Avatar {...avatar} />
      </TickerLogo>
      <Span>
        <StockBasicInfo {...singleStockState.singleStock}>
          <TickerName>{singleStockState.singleStock.ticker}</TickerName>
        </StockBasicInfo>
      </Span>
      <StockPrevCloseWrapper>
        <PrevClose {...prevCloseState.tickerPrevClose} />
      </StockPrevCloseWrapper>
      <StockAbout>
        <AboutTicker {...about} />
      </StockAbout>
      <button type="button" onClick={() => navigate('/')}>
        Go back to home page
      </button>
    </Section>
  );
};

export default StockDetails;
