import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  position: absolute;
  top: 32rem;

  margin-left: 19rem;

  border: 1px solid #E9ECEF;
  border-radius: 4px;
  
  width: 22.6rem;
  height: 5.5rem;

  font-family: 'Nunito', sans-serif;
`;

const Margin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-left: 1.5rem;

  span {
    font-size: 0.75rem;
  }
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12rem;

  p:nth-child(2) {
    color: #FD377E;
  }
`;

export {Container, Margin, ValueContainer};