import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      margin-top: 10px;
    }
  }

  span {
    vertical-align: middle;
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (min-width: 769px) {
    flex: 2 0 0;
    margin-left: 100px;
  }
`;

export const Previous = styled.button`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 5px;
  margin-right: 10px;
  background: #7d40e7 0% 0% no-repeat padding-box;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
  svg {
    vertical-align: middle;
  }
  span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin-top: 2px;
  }
  &:disabled {
    background: grey 0% 0% no-repeat padding-box;
    color: #fff;
  }
`;

export const Next = styled.button`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 5px;
  background: #7d40e7 0% 0% no-repeat padding-box;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
  svg {
    vertical-align: middle;
  }
  span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin-top: 2px;
  }
  &:disabled {
    background: grey 0% 0% no-repeat padding-box;
    color: #fff;
  }
`;
