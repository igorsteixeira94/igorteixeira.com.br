import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #38444d;
  background: #192734;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  @media (max-width: 1000px) {
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;

    z-index: 9999;
  }
`;
