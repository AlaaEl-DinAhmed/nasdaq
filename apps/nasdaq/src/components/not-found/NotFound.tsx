import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  `;
  const P = styled.p`
    font-weight: 700;
    font-size: 3rem;
  `;
  const Button = styled.button`
    background-color: var(--color-background);
    border: 1px solid transparent;
    color: var(--color-main);
    padding: 1rem;
    margin-block-start: 1rem;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s linear;
    :hover {
      background-color: var(--color-main);
      color: var(--color-background);
      border-color: var(--color-background);
    }
  `;
  const navigate = useNavigate();

  return (
    <Div>
      <P>Sorry for frustrating you. We are working on it.</P>
      <Button onClick={() => navigate('/')}>Got back to home page</Button>
    </Div>
  );
};

export default NotFound;
