import styled from 'styled-components';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 20%;
  height: 80px;
  width: 80px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    height: 1.875rem;
    width: 1.875rem;
  }
`;
