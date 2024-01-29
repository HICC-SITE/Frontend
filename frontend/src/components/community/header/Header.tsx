import React from 'react';
import DropDown from '@components/common/dropdown/Dropdown';
import OptionType from '@components/common/dropdown/OptionType';
import ROUTE from '@constants/route';
import { useMatch } from 'react-router-dom';
import * as H from './Header.style';

interface HeaderProps {
  options: OptionType[];
  onChange: (option: OptionType | null) => void;
}

function Header({ options, onChange }: HeaderProps) {
  const matchCommunityList = useMatch(ROUTE.COMMUNITY.BASE);

  return (
    <H.Container>
      <DropDown placeholder="" options={options} onChange={onChange} defaultValue={options[0]} />
      <H.WriteButton to={ROUTE.COMMUNITY.WRITE} $hide={matchCommunityList === null}>
        글쓰기
      </H.WriteButton>
    </H.Container>
  );
}

export default Header;
