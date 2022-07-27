import styled from "styled-components";

const TopHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 35rem;

  padding: 25px 30px 25px 30px;

  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  button {
    background-color: #E9ECEF;

    border: none;
    border-radius: 8px;

    width: 4rem;
    height: 2.5rem;
  }

  button:hover {
    background-color: #FD377E;
    color: #FFFFFF;
  }
`;

export {TopHeader};
