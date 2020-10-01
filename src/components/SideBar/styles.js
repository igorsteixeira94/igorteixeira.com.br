import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border-right: 2px solid var(--color-borders);

  background: var(--color-bcg-aside);
  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.5);

  height: 100vh;
  position: fixed;

  padding: 2rem 1rem;

  width: 17.8rem;

  @media (max-width: 1000px) {
    align-items: center;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    margin: 0;

    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    border-bottom: 2px solid var(--color-borders);
    border-radius: 0;
    z-index: 9999;

    box-shadow: none;
  }
`;
