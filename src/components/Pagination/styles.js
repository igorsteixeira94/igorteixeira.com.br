import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--color-link-text);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: var(--color-link-text);
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: var(--color-link-active);
    }
  }
  @media (max-width: 1000px) {
    font-size: 0.8rem;
    padding: 1rem;
  }
`;
