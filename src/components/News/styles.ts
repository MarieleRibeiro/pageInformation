import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
   
@media (max-width: 1056px) {
   flex-direction: column;
   padding: none;
  }
`

export const ContainerNews = styled.div`
  width: 100%;
`;

export const SectionNew = styled.div`
  width: 100%;
  display: flex;

  
@media (max-width: 1056px) {
    flex-direction: column;
    margin: 0 ;
  }

`;

export const Section = styled.div`
  max-width: 193px;
  width: 100%;
  margin-top: 46px;
  margin-right: 27px;
  h2 {
    margin-bottom: 15px;
  }
   
@media (max-width: 1056px) {
    max-width: unset;
    :nth-child(1) {
      display: none;
    }
  }

`;
export const New = styled.div`
  max-width: 302px;
  width: 100%;
  height: 443px;
  display: flex;
  flex-direction: column;
  padding: 50px 60px 0 60px;
  background-color: ${(props) => props.theme.colors.blue};
  box-shadow: 0px 24px 15px -20px rgba(9, 22, 89, 0.503865);
  border-radius: 3px;
  button {
    width: 145px;
    height: 46px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.blue200};
    border-radius: 5px;
    margin-top: 30px;
    cursor: pointer;
    border: none;
     
  @media (max-width: 1056px) {
   width: 100%;
  }
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
   
@media (max-width: 1056px) {
    display: flex;
    flex-direction: column;
    margin-top: 76px;
    margin-left: unset;
    margin-bottom: 60px;
    padding: 28px 25px;
    height: 322px;
    justify-content: space-around;
  }
`