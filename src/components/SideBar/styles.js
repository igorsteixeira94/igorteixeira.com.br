import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  align-items: center;
  border: 2px solid var(--color-borders);
  border-radius: 14px;
  background: var(--color-bcg-aside);
  display: flex;
  flex-direction: column;
  height: 90vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  margin: 2rem;
  @media (max-width: 1000px) {
    align-items: flex-start;
    border-top: 0;
    border-left: 0;
    border-right: 0;

    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    margin: 0;
    border-right: 2px solid var(--color-borders);
    border-radius: 0;
    z-index: 9999;
  }
`;
