import React, { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
}

const Button: React.FC<ButtonProps> = ({ children, size, ...rest }) => (
  <Container type="button" style={{ height: size }} {...rest}>
    {children}
  </Container>
);

const Container = styled.button`
  width: 100%;
  background: #0e2665;
  color: #ffffff;
  margin-top: 30px;
  border-radius: 4px;
  border: 0;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background: #0e2665;
  }
`;

export default Button;
