import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 2px solid var(--color-borders);
  border-radius: 14px;

  background: var(--color-bcg-aside);
  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.5);

  height: 90vh;
  position: fixed;

  padding: 2rem;

  width: 20rem;
  margin: 2rem;

  @media (max-width: 1000px) {
    align-items: center;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    margin: 0;

    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    border-right: 2px solid var(--color-borders);
    border-radius: 0;
    z-index: 9999;

    box-shadow: none;
  }
`;
