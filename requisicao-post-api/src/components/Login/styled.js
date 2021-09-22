import styled from "styled-components";

export const Newform = styled.form`
  width: 500px;
  padding: 40px 0px;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #311e6b;
  box-shadow: 0px 0px 7px black inset;
  input {
    width: 260px;
    height: 35px;
    margin: 5px;
    padding: 0px 0px 0px 20px;
    background-color: #64539b;
    color: #21183d;

    border: 1px solid #311e6b;
    border-radius: 5px;
    font-size: 18px;
  }
  input:hover {
    background-color: #7965b9;
  }

  input:focus {
    outline: none;
    border: 1px solid #4c4a52;
    background-color: #7965b9;
  }

  input::placeholder {
    color: #270593;
  }

  button {
    width: 150px;
    height: 35px;
    margin: 20px;
    background-color: #463380;
    color: #9e87e6;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #7965b9;
    color: #311e6b;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #bb3c3c;
  }
`;
