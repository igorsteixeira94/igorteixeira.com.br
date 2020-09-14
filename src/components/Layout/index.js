import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import GlobalStyles from '../../styles/global';
import * as S from './styles';
import SideBar from '../SideBar';
import MenuBar from '../MenuBar';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal>
        <SideBar />
      </TransitionPortal>

      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal>
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
