import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const LayoutMain = styled.main`
  background: var(--color-bcg-main);
  min-height: 100vh;
  width: 100%;
  padding: 2rem 0 0 20rem;

  @media (max-width: 1200px) {
    padding: 4.125rem 0 3rem 0;
  }
`;
