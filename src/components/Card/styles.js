import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 1rem;

  margin-bottom: 2rem;

  background-color: #F8F9FA !important;

  border-left: 4px solid #E9ECEF;
  border-radius: 4px;

  height: 5.5rem;
  max-width: 38rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10rem;

  background-color: #F8F9FA;

  margin-top: 1rem;
  margin-left: 1rem;

  h2 {
    font-weight: bold;
  }

  span {
    position: absolute;
    left: 88rem;
  }

  button {
    position: absolute;
    left: 98rem;

    border: none;
    border-radius: 4px;

    height: 1.8rem;
    width: 1.8rem;
  }

  button:hover {
    background-color: #FD377E;
    color: #FFFFFF;
  }
`;

const Type = styled.div`
  display: flex;
  margin-left: 1rem;

  background-color: #F8F9FA;

  font-size: 0.75rem;
`;

export {Container, InfoContainer, Type};