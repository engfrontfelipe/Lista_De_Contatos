import styled from "styled-components";

export const Table = styled.table`
  margin-top: 10px;
  width: 100%;
  padding: 6px;
  background-color: #1f1f20;
  color: #dce0e6;
  border-radius: 5px;
  box-shadow: 0px 4px 10px #000000b5;
`;

export const Td = styled.td`
  padding-top: 12px;
  padding-bottom: 6px;
  text-align: center;
  cursor: pointer;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: center;
  border-bottom: 2px solid #dce0e6;
  cursor: pointer;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #252527;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuButton = styled.button`
  background-color: #007bff;
  color: #dce0e6;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #1f1f20;
  border: 1px solid #3a3a3b;
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0px 4px 10px #000000b5;
  z-index: 10;
`;

export const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: #dce0e6;

  &:hover {
    background-color: #3a3a3b;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #1f1f20;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  color: #dce0e6;
  box-shadow: 0px 4px 10px #000000b5;
`;

export const CloseButton = styled.button`
  background: #d9534f;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  float: right;

  &:hover {
    background: #c9302c;
  }
`;

export const SaveButton = styled.button`
  background: rgb(44, 189, 7);
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;

  &:hover {
    background: rgb(15, 71, 1);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
  border: 1px solid #555;
  background: #252527;
  color: #dce0e6;
`;
