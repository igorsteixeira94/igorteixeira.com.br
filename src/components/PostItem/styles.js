import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: var(--color-link-text);
  display: flex;
  text-decoration: none;
  margin: 0 auto;

  &:hover {
    color: var(--color-link-active);
  }
`;
export const PostItemWrapper = styled.section`
  align-items: center;

  border: 1px solid var(--color-borders);
  border-radius: 8px;

  background: var(--color-bcg-aside);

  display: flex;
  width: 95%;
  align-items: flex-start;
  flex-direction: column;
  padding: 1.5rem 1rem;

  transition: all 0.2s;
  margin: 0rem 1rem 0.8rem;

  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    margin-left: 2rem;
  }
  @media (max-width: 1000px) {
    margin: 1.6rem 2.4rem 0.8rem;

    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;
export const PostItemTag = styled.div`
  align-items: center;
  background: ${(props) => props.background};
  color: #fff;
  display: flex;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  border-radius: 8px;
  min-height: auto;
  min-width: auto;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.7rem;
  margin-left: 1.5rem;

  @media (max-width: 1000px) {
    margin-left: 0rem;
    font-size: 1rem;
  }
`;
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  @media (max-width: 1000px) {
    margin: 0;
  }
`;
export const PostItemDate = styled.time`
  font-size: 0.9rem;

  @media (max-width: 425px) {
    font-size: 0.7rem;
  }
`;
export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;
