/* eslint-disable radix */
const postsQuery = ` {
  posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          category
          background
          date_timestamp:date
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
          description
          title
        }
        fields {
          slug
        }
        excerpt(pruneLength:5000)
        timeToRead
      }
    }
  }
}`;

const flatten = (arr) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }));

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // overrides main index name, optional
    setSettings: {
      atributesToSnippet: ['excerpt:20'],
    },
  },
];

module.exports = queries;
