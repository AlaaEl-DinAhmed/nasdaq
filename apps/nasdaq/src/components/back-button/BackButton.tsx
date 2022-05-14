import { useNavigate } from 'react-router-dom';
import Button from '../../styled-components/BackButton';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      aria-label="Back to home"
      onClick={() => navigate('/')}
    >
      <img src="../../assets/icons/arrow-back.svg" alt="Back icon" />
    </Button>
  );
};

export default BackButton;
