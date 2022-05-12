import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
      <h1>StockDetails Page</h1>
      <button type="button" onClick={() => navigate('/')}>
        Go back to home page
      </button>
    </div>
  );
};

export default StockDetails;
