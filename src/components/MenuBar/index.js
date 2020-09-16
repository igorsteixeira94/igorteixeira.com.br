/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Home } from '@styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { AboutDotMe as Me } from '@styled-icons/simple-icons/AboutDotMe';
import * as GA from './trackers';
import * as S from './styles';

function MenuBar() {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        {/* Elemento Home */}
        <S.MenuBarLink
          to="/"
          title="Voltar para a home"
          cover
          direction="top"
          bg="#1c1c1f"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>

        {/* Elemento ir para ir para pagina about */}
        <S.MenuBarLink
          to="/about"
          title="Ir para o Topo"
          cover
          direction="top"
          bg="#1c1c1f"
        >
          <S.MenuBarItem>
            <Me />
          </S.MenuBarItem>
        </S.MenuBarLink>

        {/* Elemento pesquisar */}
        <S.MenuBarLink
          to="/search"
          title="Pesquisar"
          cover
          direction="top"
          bg="#1c1c1f"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>

        {/* Elemento ir para o top */}
        <S.MenuBarLink
          to="#"
          title="Ir para o Topo"
          cover
          direction="top"
          bg="#1c1c1f"
          onClick={() => {
            GA.topClickTrack();
            window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <S.MenuBarItem>
            <Arrow />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
}

export default MenuBar;
