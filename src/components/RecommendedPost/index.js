/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import * as S from './styles';

function RecommendedPost({ next, previous }) {
  return (
    <S.RecommendedWrapper>
      {previous ? (
        <S.RecommendedLink
          to={previous.fields.slug}
          className="previous"
          cover
          direction="left"
          bg="#16202c"
        >
          {previous.frontmatter.title}
        </S.RecommendedLink>
      ) : (
        <S.RecommendedEmpty />
      )}

      {next ? (
        <S.RecommendedLink
          to={next.fields.slug}
          className="next"
          cover
          direction="right"
          bg="#16202c"
        >
          {next.frontmatter.title}
        </S.RecommendedLink>
      ) : (
        <S.RecommendedEmpty />
      )}
    </S.RecommendedWrapper>
  );
}

RecommendedPost.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPost;
