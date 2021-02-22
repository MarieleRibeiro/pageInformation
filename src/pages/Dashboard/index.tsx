import { Container, Wrapper } from "./styles";
import { Header } from "../../components/header";
import { News } from "../../components/News";
import React from "react";

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
