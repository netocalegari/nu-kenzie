import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-family: 'Nunito', sans-serif;
  /* width: 35.1rem; */

`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 1rem;
  }
  div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  button {
    height: 2.5rem;
    width: 5.75rem;

    background-color: #E9ECEF;

    border: none;
    border-radius: 8px;
  }

  button:hover {
    background-color: #FD377E;
    color: #FFFFFF;
  }

  button:first-child {
      width: 4.3rem;
  }
`;

const NoMovesTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;

  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export {Container, Header, NoMovesTitle};