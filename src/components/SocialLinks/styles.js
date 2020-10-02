import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  @media (max-width: 1200px) {
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
  color: var(--color-link-text);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--color-link-active);
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb; /*Colocar cor em component svg*/
  width: 30px;
  height: 30px;
`;
