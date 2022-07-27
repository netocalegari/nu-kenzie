import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 100vh;

  font-family: 'Nunito', sans-serif;

  h1 {
    font-size: 2.3rem;
  }

  h1, p {
    color: #FFFFFF;
  }

  button {
    border: none;
    border-radius: 8px;

    background-color: #FD377E;
    color: #FFFFFF;

    height: 3rem;
    width: 15rem;

    padding: 13px, 20px, 13px, 20px;

    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }
`;

export { Container };