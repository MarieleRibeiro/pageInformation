import styled from "styled-components";

export const HeaderContainer = styled.div`
  h3 {
    margin-bottom: 19px;
  }
  h1 {
    margin-bottom: 30px;
  }
`;
export const SectionNews = styled.div`
  position: absolute;
  top: 220px;
  right: 200px;
  max-width: 302px;
  height: 443px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 60px 122px 60px;
  background-color: ${(props) => props.theme.colors.blue};
  box-shadow: 0px 24px 15px -20px rgba(9, 22, 89, 0.503865);
  border-radius: 10px;
  button {
    width: 145px;
    height: 46px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.blue200};
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
  h2 {
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.white};
  }
  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
  }
`
