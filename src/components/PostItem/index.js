/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function PostItem({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) {
  return (
    <S.PostItemLink to={slug} cover direction="right" bg="#202833">
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} • {timeToRead} min de leitura
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
}

export default PostItem;

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
