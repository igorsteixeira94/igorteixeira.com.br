import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styled from 'styled-components';

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--color-link-active);
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--color-link-text);
  text-decoration: none;
  transition: color 0.5s;
  font-weight: 400;

  &:hover {
    color: var(--color-link-active);
  }
`;
