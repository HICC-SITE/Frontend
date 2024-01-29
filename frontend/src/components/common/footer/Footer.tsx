import React from 'react';
import { ReactComponent as Instagram } from '@assets/image/icon/instagram.svg';
import { Desktop, Mobile, Tablet } from '@assets/mediaQuery';
import { useMatch } from 'react-router-dom';
import ROUTE from '@constants/route';
import * as F from './Footer.style';

const footerText = {
  hicc: 'hicc',
  leaderFormat: '회장 ',
  location: {
    mobile: `홍익대학교 중앙 컴퓨터 동아리 HICC /
    Hongik Computer Club
    동아리실 G429`,
    tablet: `홍익대학교 중앙 컴퓨터 동아리 HICC /
    Hongik Computer Club 동아리실 G429`,
    desktop: `홍익대학교 중앙 컴퓨터 동아리 HICC / Hongik Computer Club
    동아리실 G429`,
  },
  copyright: `Copyrightⓒ2024.HICC. All rights reserved.`,
  instagramMent: 'HICC 채널 바로가기',
};

function Footer() {
  const matchCommunityArticleDetail = useMatch(`${ROUTE.COMMUNITY.BASE}/${ROUTE.COMMUNITY.DETAIL}`);

  const dontShowArticleDetail = () => {
    const articleId = Number(matchCommunityArticleDetail?.params.id);
    return !Number.isNaN(articleId);
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/hongik_hicc/');
  };
  return (
    <F.Container hide={dontShowArticleDetail()}>
      <F.LeftSide>
        <F.HICC>{footerText.hicc}</F.HICC>
        <F.Leader>
          {footerText.leaderFormat}
          {`윤찬호`}
        </F.Leader>
        <Mobile>
          <F.Location>{footerText.location.mobile}</F.Location>
        </Mobile>
        <Tablet>
          <F.Location>{footerText.location.tablet}</F.Location>
        </Tablet>
        <Desktop>
          <F.Location>{footerText.location.desktop}</F.Location>
        </Desktop>
        <F.Copyright>{footerText.copyright}</F.Copyright>
      </F.LeftSide>
      <F.RightSide>
        <F.InstagramMent>{footerText.instagramMent}</F.InstagramMent>
        <F.InstagramButton onClick={openInstagram}>
          <Instagram />
        </F.InstagramButton>
      </F.RightSide>
    </F.Container>
  );
}

export default Footer;
