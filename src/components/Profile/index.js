import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../AvatarProfile';

import * as S from './styles';

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position, description },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          position
          description
          title
        }
      }
    }
  `);
  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>

      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
