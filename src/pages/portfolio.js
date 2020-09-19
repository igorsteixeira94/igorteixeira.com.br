import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Post/styles';

const Portfolio = () => (
  <Layout>
    <SEO
      title="Portfólio"
      description="Conheça um pouco mais sobre as tecnologias e ferramentas que utilizo."
    />
    <S.MainContent>
      <h1>Calma que ainda estou construindo essa página!</h1>
    </S.MainContent>
  </Layout>
);

export default Portfolio;
