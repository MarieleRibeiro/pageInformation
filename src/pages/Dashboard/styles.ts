import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white100};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 1440px;  */


@media (max-width: 1056px) {
    flex-direction: column;
    padding: 37px 15px 0 16px;
    width: 100%;
  }


`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1125px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 106px 87px;

@media (max-width: 1056px) {
    width: 100%;
    flex-direction: column;
    padding: 60px 40px;
  }

`;
