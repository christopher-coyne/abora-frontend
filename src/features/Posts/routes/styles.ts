import styled from 'styled-components';

export const Nav = styled.nav`
  margin: 0px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid red;

  font-family: 'nunito';

  & ul {
    font-size: 14px;
    display: flex;

    & a {
      text-decoration-style: none;
    }
  }
`;

export const PostGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
