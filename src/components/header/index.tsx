import styled from "styled-components";
import bitmap from "../../images/Bitmap.png";

export const HeaderContainer = styled.div`
  h3 {
    margin-bottom: 19px;
  }
  h1 {
    margin-bottom: 30px;
  }
`;
export const SectionNews = styled.div`
  width: 302px;
  height: 443px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 24px 15px -20px rgba(9, 22, 89, 0.503865);
  border-radius: 10px;
  button {
    width: 145px;
    height: 46px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.blue200};
    border-radius: 10px;
    margin-top: 30px;
  }
`;
export const Section = styled.div`
  display: flex;
  img {
    margin-right: 25px;
    width: 635px;
    height: 319px;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <h3>Development</h3>
      <h1>Compatible Inkjet Cartridge</h1>
      <Section>
        <img src={bitmap} alt="" />
        <SectionNews>
          <h2>Party Jokes Startling But Unnecessary</h2>
          <p>
            Life is a journey of twists and turns, peaks and valleys, mountains
            to climb and oceans to explore.
          </p>
          <button>Read more</button>
        </SectionNews>
      </Section>
    </HeaderContainer>
  );
};