import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AboutTicker from '../../components/about/AboutTicker';
import PrevClose from '../../components/prev-close/PrevClose';
import { useActions } from '../../overmind/stocks';
const StockDetails: React.FC = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const { getTickerDetails, getPrevClose } = useActions();

  useEffect(() => {
    getTickerDetails(id);
    getPrevClose(id);
  });
  return (
    <div>
      {/* // TODO Adding StockBasicInfo props */}
      {/* <StockBasicInfo/> */}
      <PrevClose />
      <AboutTicker />
      <button type="button" onClick={() => navigate('/')}>
        Go back to home page
      </button>
    </div>
  );
};

export default StockDetails;
