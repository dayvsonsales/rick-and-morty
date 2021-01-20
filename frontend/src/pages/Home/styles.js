import styled from "styled-components";

export const WrapperContainer = styled.div`
  min-width: 100vh;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.div`
  padding: 24px;
  padding-top: 35px;
  padding-bottom: 35px;
  margin: auto;
  font-weight: bold;

  & p {
    color: rgb(32, 35, 41);
    font-size: 5.625rem;
    font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
      "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`;

export const ListContainer = styled.div`
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  background: rgb(32, 35, 41);
  min-width: 100%;
  margin: auto;
`;

export const Footer = styled.div`
  background: rgb(32, 35, 41);
  padding: 12px;
`;
