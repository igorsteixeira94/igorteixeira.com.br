import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const RecommendedWrapper = styled.section`
  border: 2px solid var(--color-borders);
  border-radius: 8px;
  background: var(--color-bcg-main);
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: var(--color-bcg-main);
  color: var(--color-link-active);
  display: flex;
  padding: 1.5rem 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  @media (max-width: 1200px) {
    line-height: 1.3;
    font-size: 0.9rem;
  }
  &:hover {
    background: var(--color-borders);
  }
  &.previous {
    border-right: 1px solid var(--color-borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;

export const RecommendedEmpty = styled.div`
  align-items: center;
  background: var(--color-bcg-main);
  color: var(--color-link-active);
  display: flex;
  padding: 1.5rem 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  @media (max-width: 1200px) {
    line-height: 1.3;
    font-size: 0.9rem;
  }
`;
