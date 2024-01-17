import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ROUTE from '@constants/route';
import { Desktop } from '@assets/mediaQuery';
import * as H from './Header.style';

function Header() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const navigate = useNavigate();

  const goLogin = () => {
    navigate(ROUTE.LOGIN);
  };

  const logout = async () => {
    // logout
    navigate(ROUTE.HOME);
  };

  return (
    <Desktop>
      <H.Container>
        <H.Logo to={ROUTE.HOME} />
        <H.Tab to={ROUTE.CALENDAR}>calendar</H.Tab>
        <H.Tab to={ROUTE.COMMUNITY}>community</H.Tab>
        {isAdmin && <H.Tab to={ROUTE.ADMIN}>회원관리</H.Tab>}
        {isLogin ? <H.Auth onClick={logout}>Log out</H.Auth> : <H.Auth onClick={goLogin}>Log in</H.Auth>}
      </H.Container>
    </Desktop>
  );
}

export default Header;
