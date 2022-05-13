import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = () => {
  const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  `;
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
