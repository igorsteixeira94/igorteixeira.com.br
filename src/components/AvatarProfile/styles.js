import styled from 'styled-components';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    display: none;
  }
`;
