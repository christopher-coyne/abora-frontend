import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    font-size: 22px;
  }

  & input {
    padding: 10px;
    font-size: 14px;
    font-style: italic;
    color: #777777;
    border: 2px solid black;
    border-radius: 5px;
  }

  & input:focus {
    outline: none;
  }
`;
