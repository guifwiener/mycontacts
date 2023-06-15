import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  background: #fff;
  height: 52px;
  padding: 0 16px;
  border: 2px solid #fff;
  outline: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}

  &[disabled]{
    background: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
