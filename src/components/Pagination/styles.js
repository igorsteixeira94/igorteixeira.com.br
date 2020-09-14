import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  align-items: center;
  color: #8899a6;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #1fa1f2;
    }
  }
  @media (max-width: 1000px) {
    font-size: 0.8rem;
    padding: 1rem;
  }
`;
