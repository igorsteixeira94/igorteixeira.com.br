import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Search from '../components/Search';

// import { Container } from './styles';

function SearchPage() {
  return (
    <Layout>
      <SEO title="Search" />
      <Search />
    </Layout>
  );
}

export default SearchPage;
