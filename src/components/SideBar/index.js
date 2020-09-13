import React from 'react';
import MenuLinks from '../MenuLinks';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

import * as S from './styles';

function SideBar() {
  return (
    <S.SideBarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.SideBarWrapper>
  );
}

export default SideBar;
