/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import * as S from './styles';

function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <AniLink to={prevPage} cover direction="left" bg="#16202c">
          {' '}
          &#8678; página anterior
        </AniLink>
      )}
      <p>
        {currentPage} de {numPages} paginas
      </p>

      {!isLast && (
        <AniLink to={nextPage} cover direction="right" bg="#16202c">
          {' '}
          proxima página &#8680;
        </AniLink>
      )}
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
};

export default Pagination;
