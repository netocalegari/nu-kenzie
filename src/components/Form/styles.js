import styled from "styled-components";

const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  /* margin-top: 3rem; */
  margin-left: 19rem;

  border: 1px solid #E9ECEF;
  border-radius: 4px;

  width: 22.6rem;
  height: 21.9rem;

  font-family: 'Inter', sans-serif;

  p {
    font-size: 0.75rem;
    color: #868E96;
  }

  > label {
    margin-top: 1rem;
  }
  
  label, input, p, div, button {
    margin-left: 1rem;
    border-radius: 8px;
  }

  label, input, p, div, p {
    font-size: 0.75rem;
  }
  
  div {
    margin: 0;
  }

  input {
    width: 19.6rem;
    height: 3.25rem;
    border: none;
  }

  input, select {
    background-color: #F8F9FA;
  }

  button {
    width: 88.5%;
    height: 3.25rem;

    border: none;

    background-color: #FD377E;
    color: #FFFFFF;

    font-size: 1rem;

    margin-top: 1rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9.5rem;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.7rem;

  input, select {
    width: 8rem;
    border: none;
  }
`;

export {FormTag, LabelContainer, ValueContainer};