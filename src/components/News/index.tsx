import { ContainerNews, SectionNew, Section } from './styles'

import map from "../../assets/bitmap.jpg";

const posts = [
  {
    title: "Life Advice Looking Through A Windowns",
    text:
      " Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore.",
    id: "1"
  },
  {
    title: "Choosing The Best Photo Printer",
    text:
      " Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore.",
    id: "2"
  },
  {
    title: "Unmatched Toner Cartridge Quality 20 Less Than Oem Price",
    text:
      " Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore.",
    id: "3"
  },
];

export const News = () => {
  return (
    <ContainerNews>
      <img src={map} alt="" />
      <SectionNew>
        {posts.map((noticia) => (
          <Section>
            <h2>{noticia.title}</h2>
            <p>{noticia.text}</p>
          </Section>
        ))}
      </SectionNew>
    </ContainerNews>
  );
};
