import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 60%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const User = styled.div``;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 0 0.2rem;
  }
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: smaller;
  }
`;

export const Inner = styled.div`
  padding-top: 1.5rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  font-size: 0.9rem;

  svg {
    margin-right: 10px;
  }
`;

export const Link = styled.a`
  line-height: 1.5;
  font-size: 0.9rem;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #1265ec;
  }
`;
