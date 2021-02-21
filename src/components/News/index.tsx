import { ContainerNews, SectionNew, Section } from './styles'
import api from "../../services/api"

import map from "../../assets/bitmap.jpg";
import { useEffect, useState } from 'react';

interface Post {
  id: string,
  title: string,
  description: string
}

export const News = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);


  useEffect(() => {
    api.get('v3/52be2ef0-5605-40a6-bb01-a19a8ee31cad').then(response => {
      setPosts(response.data.posts);
    });
  }, []);

  return (
    <ContainerNews>
      <img src={map} />
      <SectionNew>
        {posts.map(post =>
          <Section key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Section>
        )}
      </SectionNew>

    </ContainerNews>
  );
};
