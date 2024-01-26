/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MemberInfoMajorDivision = styled.div`
  width: 17.7rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const MemberInfoNameDivision = styled.div`
  width: 5.3rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const BlankDivision = styled.div`
  width: 1.8rem;
  color: ${(props) => props.theme.colors.grey003};
  font-feature-settings:
    'clig' off,
    'liga' off;
  text-align: center;
`;
export const MemberInfoMajor = styled.div`
  flex: 1 0 0;
  width: 17.7rem;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const MemberInfoName = styled.div`
  width: 5.3rem;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.typography.common.caption1}
`;
export const Blank = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 32.8rem;
  padding: 2rem 1.2rem;
  flex-direction: row;
  align-items: flex-end;
  gap: 1.5rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.colors.grey001};
`;
export const SearchBox = styled.div`
  display: flex;
  width: 19rem;
  padding: 1rem 1.2rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.black};
`;
