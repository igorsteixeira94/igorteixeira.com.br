import React from 'react';
import links from './content';
import * as S from './styles';

function MenuLinks() {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink
              to={link.url}
              activeClassName="active"
              cover
              direction="right"
              bg="#1c1c1f"
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
}

export default MenuLinks;
