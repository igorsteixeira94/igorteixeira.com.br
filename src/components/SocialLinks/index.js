import React from 'react';
import * as S from './styles';
import Icons from './icons';
import links from './content';

function SocialLinks() {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((link, i) => {
          const Icon = Icons[link.label];
          return (
            <S.SocialLinksItem key={i}>
              <S.SocialLinksLink
                target="_blank"
                href={link.url}
                title={link.label}
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          );
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  );
}

export default SocialLinks;
