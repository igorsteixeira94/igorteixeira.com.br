import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb; /*Colocar cor em component svg*/
  width: 30px;
  height: 30px;
`;
