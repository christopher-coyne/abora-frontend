import styled from 'styled-components';

export const Nav = styled.nav`
  margin: 0px;
  padding: 11px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  box-shadow: 0px 0px 10px black;
  font-family: 'nunito';

  & ul {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 20px;

    & li {
      & a {
        text-decoration: none;
        color: black;
      }

      & button {
        background-color: #3a3a3a;
        padding: 6px 14px;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 16px;
      }
    }
  }
`;

export const Title = styled.div`
  font-size: 20px;
`;
