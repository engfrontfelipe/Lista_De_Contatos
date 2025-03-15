import styled from "styled-components";

export const Title = styled.h1`
  background-color: #1f1f20;
  text-align: center;
  font-size: 42px;
  color: #dce0e6;
  padding: 8px 0;
  border-radius: 5px;
`;

export const Form = styled.form`
    background-color: #1f1f20;
    color: #dce0e6;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 18px;
    padding: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `

export const Input = styled.input`
  margin-bottom: 6px;
  width: 70%;
  border-radius: 10px;
  border: none;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;

`

export const Label = styled.label`
    color: #dce0e6;
    margin-bottom: 6px;
    font-weight: bold;
    

`


export const MenuButton = styled.button`
  background-color: #007bff;  
  color: #dce0e6;
  padding: 8px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 130px;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;  
