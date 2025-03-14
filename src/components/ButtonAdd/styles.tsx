import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonCircle = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: rgb(44, 189, 7);
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: rgb(22, 109, 0);
  }
`;
