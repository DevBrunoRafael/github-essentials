import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: auto;
  }
`;

export const Title = styled.h3`
  margin-bottom: 2.5rem;
`;
