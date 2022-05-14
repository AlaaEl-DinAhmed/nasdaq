import React from 'react';
import styled from 'styled-components';

type AlertProps = {
  message: string;
};

const Alert: React.FC<AlertProps> = ({ message }) => {
  const Alert = styled.p`
    text-align: center;
    color: #721c24;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 700;
    background-color: #f5c6cb;
    margin-block-end: 2rem;
    margin-block-start: 2rem;
  `;
  return <Alert>{message}</Alert>;
};

export default Alert;
