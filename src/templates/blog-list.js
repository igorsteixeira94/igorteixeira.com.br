import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

// import { Container } from './styles';

function BlogList({ data, pageContext }) {
  const postList = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;

  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/pages/${currentPage - 1}`;
  const nextPage = `/pages/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Home" />

      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            key={slug}
          />
        )
      )}

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            background
            category
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
