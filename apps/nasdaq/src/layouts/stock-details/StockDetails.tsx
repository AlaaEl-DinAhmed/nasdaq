import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutTicker from '../../components/about/AboutTicker';
import Avatar from '../../components/avatar/Avatar';
import BackButton from '../../components/back-button/BackButton';
import NotFound from '../../components/not-found/NotFound';
import PrevClose from '../../components/prev-close/PrevClose';
import StockBasicInfo from '../../components/stock-basic-info/StockBasicInfo';
import { Status } from '../../interfaces/status-api';
import { useActions, useAppState } from '../../overmind/stocks';
import BackToHomeButtonWrapper from '../../styled-components/BackToHomeButtonWrapper';
import StockAbout from '../../styled-components/StockArticleWrapper';
import StockDetailsHeadingWrapper from '../../styled-components/StockDetailsHeadingWrapper';
import StockDetailsSections from '../../styled-components/StockDetailsSections';
import StockPrevCloseWrapper from '../../styled-components/StockPrevCloseWrapper';
import TickerLogo from '../../styled-components/TickerLogo';
import TickerName from '../../styled-components/TickerName';

const StockDetails = () => {
  const { id } = useParams() as { id: string };
  const { singleStockState, prevCloseState } = useAppState();
  const { getTickerDetails, getPrevClose } = useActions();

  const about = {
    website: singleStockState.singleStock?.website,
    description: singleStockState.singleStock?.description,
    industry: singleStockState.singleStock?.industry,
  };

  const avatar = {
    src: singleStockState.singleStock?.logo_url || '',
    alt: singleStockState.singleStock.ticker,
    width: 80,
    fallback: '../../assets/images/nasdaq-logo.svg',
  };
  useEffect(() => {
    getTickerDetails(id);
    getPrevClose(id);
  }, [getTickerDetails, getPrevClose, id]);

  const content = (
    <StockDetailsSections>
      <BackToHomeButtonWrapper>
        <BackButton />
      </BackToHomeButtonWrapper>
      <TickerLogo>
        <Avatar {...avatar} />
      </TickerLogo>
      <StockDetailsHeadingWrapper>
        <StockBasicInfo {...singleStockState.singleStock}>
          <TickerName>{singleStockState.singleStock.ticker}</TickerName>
        </StockBasicInfo>
      </StockDetailsHeadingWrapper>
      <StockPrevCloseWrapper>
        <PrevClose {...prevCloseState.tickerPrevClose} />
      </StockPrevCloseWrapper>
      <StockAbout>
        <AboutTicker {...about} />
      </StockAbout>
    </StockDetailsSections>
  );

  const noStockData = <NotFound />;
  return {
    ...(singleStockState.stock.status === Status.fails ? noStockData : content),
  };
};

export default StockDetails;
