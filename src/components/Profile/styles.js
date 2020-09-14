import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(AniLink)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    text-align: left;
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  }
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4;

  @media (max-width: 1000px) {
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  @media (max-width: 1000px) {
    display: none;
  }
`;
