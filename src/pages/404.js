import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Post/styles';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <S.MainContent>
      <h2>Deu ruim ! Volta que aqui não tem nada.</h2>
    </S.MainContent>
  </Layout>
);

export default NotFoundPage;
