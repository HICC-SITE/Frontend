import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 13.6rem;
  flex-shrink: 0;

  background-color: ${(props) => props.theme.colors.grey001};
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5.2rem;
  margin: 2.6rem 1.6rem;
  padding: 2rem 1.2rem;
  flex-shrink: 0;
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;

  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.typography.common.caption1};
  font-feature-settings:
    'clig' off,
    'liga' off;
`;
