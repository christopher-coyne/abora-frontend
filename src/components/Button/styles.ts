import styled from 'styled-components';

export const Button = styled.button`
  background-color: #3a3a3a;
  padding: 6px 14px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #5f3865;
  }
`;

export const Oauth = styled.button`
  background-color: #3a3a3a;
  padding: 6px 14px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #5f3865;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
  border-radius: 10px;
  margin: 0 10px 0 0;
  cursor: pointer;
`;
