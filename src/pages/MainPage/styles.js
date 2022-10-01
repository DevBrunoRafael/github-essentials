import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
  margin: -4rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0;
    margin-top: -7rem;
  }
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.div`
  width: 100%;
  max-width: 583px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  border-radius: 50px;
  font-size: 24px;
  /* margin-right: 24px; */
  padding: 0 24px;

  position: relative;

  &::placeholder {
    padding-left: 0.4rem;
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  width: 80px;
  height: 64px;
  /* border: 3px solid ${(props) => props.theme.colors.text}; */
  transition: background 0.2s;

  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  position: absolute;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;
