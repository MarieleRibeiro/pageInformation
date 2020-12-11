import styled from "styled-components";
import bitmap from "../../images/Bitmap.png";

export const ContainerNews = styled.div`
  min-width: 635px;
`;
export const SectionNew = styled.div`
  display: flex;
`;

export const Section = styled.div`
  width: 193px;
  margin-top: 46px;
  margin-right: 27px;
  h2 {
    margin-bottom: 15px;
  }
`;
const news = [
  {
    title: "Life Advice Looking Through A Windowns",
    text:
      " Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore.",
  },
  {
    title: "Choosing The Best Photo Printer",
    text:
      " Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore.",
  },
  {
    title: "Unmatched Toner Cartridge Quality 20 Less Than Oem Price",
    text:
      " Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore.",
  },
];

export const News = () => {
  return (
    <ContainerNews>
      <img src={bitmap} alt="" />
      <SectionNew>
        {news.map((noticia) => (
          <Section>
            <h2>{noticia.title}</h2>
            <p>{noticia.text}</p>
          </Section>
        ))}
      </SectionNew>
    </ContainerNews>
  );
};
