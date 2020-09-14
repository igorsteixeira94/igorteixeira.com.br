import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuBarWrapper = styled.aside`
  display: none;
  @media (max-width: 1000px) {
    align-items: center;
    background: #192734;

    display: flex;

    justify-content: space-between;
    border-top: 1px solid #38444d;
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
    z-index: 9999;
  }
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: #1fa1f2;
  }
`;
