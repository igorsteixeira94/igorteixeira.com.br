import styled from 'styled-components';

export const SearchWrapper = styled.section`
  background: #16202c;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.125rem 2rem;
    @media (max-width: 1000px) {
      padding: 0.5rem 1rem;
    }
  }
  .ais-SearchBox {
    padding-top: 2rem;
    @media (max-width: 1000px) {
      padding-top: 1rem;
    }
  }
  .ais-Stats {
    color: #8899a6;
    font-size: 0.8rem;
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid #38444d;
    color: #8899a6;
    font-size: 1rem;
    padding: 0.2rem;
    width: 100%;
    &:focus,
    &:active {
      outline: 0;
      border-bottom: 1px solid green;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-loadingIndicator,
  .ais-SearchBox-reset {
    display: none;
  }
`;
