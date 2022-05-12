import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useActions, useAppState } from '../../overmind/stocks';
const StockDetails: React.FC = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const { singleStockState } = useAppState();
  const { getTickerDetails } = useActions();

  useEffect(() => {
    getTickerDetails(id);
  });
  return (
    <div>
      <h1>StockDetails Page</h1>
      <button type="button" onClick={() => navigate('/')}>
        Go back to home page
      </button>
    </div>
  );
};

export default StockDetails;
