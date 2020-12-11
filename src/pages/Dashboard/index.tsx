import styled from "styled-components";
import { Header } from "../../components/header";
import { News } from "../../components/News";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white100};
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100%;
  // width: 100%;
`;
export const Wrapper = styled.div`
  // position: relative;
  width: 100%;
  max-width: 1222px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 106px 130px 162px 130px;
`;

export const Dashboard = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <News />
      </Wrapper>
    </Container>
  );
};
