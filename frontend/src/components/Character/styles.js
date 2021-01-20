import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  width: 600px;
  height: 220px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgb(60, 62, 68);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  overflow: hidden;
`;

export const Image = styled.img``;

export const Data = styled.div`
  padding: 12px;
  color: #ffff;
  width: 380px;

  & h1 {
    color: white;
    font-weight: bold;
    font-size: 18px;
    text-overflow: ellipsis;
    overflow-x: scroll;
    white-space: nowrap;
    height: 40px;
  }
`;
