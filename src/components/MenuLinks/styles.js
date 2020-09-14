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
    color: #1fa1f2;
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`;
