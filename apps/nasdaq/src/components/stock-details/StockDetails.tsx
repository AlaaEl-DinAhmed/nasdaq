import { useNavigate, useParams } from 'react-router-dom';
const StockDetails: React.FC = () => {
  const params = useParams() as { id: string };
  const navigate = useNavigate();

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
