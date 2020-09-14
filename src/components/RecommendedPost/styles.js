import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
  display: flex;
`;

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: #192734;
  color: #1fa1f2;
  display: flex;
  padding: 1.5rem 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  @media (max-width: 1000px) {
    line-height: 1.3;
    font-size: 0.9rem;
  }
  &:hover {
    background: #38444d;
  }
  &.previous {
    border-right: 1px solid #38444d;
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
  background: #192734;
  color: #1fa1f2;
  display: flex;
  padding: 1.5rem 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  @media (max-width: 1000px) {
    line-height: 1.3;
    font-size: 0.9rem;
  }
`;
