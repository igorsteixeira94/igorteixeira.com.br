import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.aside`
  display: none;
  @media (max-width: 1200px) {
    align-items: center;
    background: var(--color-bcg-aside);

    display: flex;

    justify-content: space-between;
    border-top: 1px solid var(--color-borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
    z-index: 9999;
  }
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
`;

export const MenuBarLink = styled(AniLink)`
  display: block;
  color: var(--color-link-text);
  &:hover {
    color: var(--color-link-active);
  }
`;

export const MenuBarItem = styled.span`
  color: var(--color-link-text);
  cursor: pointer;
  display: block;
  height: 2.5rem;
  padding: 0.5rem 1.2rem;
  position: relative;
  width: 3.75rem;

  .active {
    color: var(--color-link-active);
  }
`;
