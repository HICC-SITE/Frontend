import React, { useState } from 'react';
import theme from '@styles/theme';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Variants } from 'framer-motion';
import Switch from '@components/common/switch/Switch';
import arrow from '@assets/image/icon/arrow.svg';
import { ReactComponent as EditIcon } from '@assets/image/icon/edit.svg';
import { isAdminState, modalState } from '../../state/calendar';
import * as S from './style/ScheduleCard.style';

const variants: Variants = {
  notShow: {
    transform: 'rotate(0deg)',
    transition: { duration: 0.2 },
  },
  show: {
    transform: 'rotate(180deg)',
    transition: { duration: 0.2 },
  },
};

export default function ScheduleCard() {
  const detail =
    '컴퓨터에 관심이 0.1이라도 있으신 분컴공과 학생(특히 들어오면 후회 안함;;컴잘알 형 많음)컴공으로 복전 생각 한 번이라도 하신 분너도 나도 배운다는 프로그래밍에 혹해본 적 있으신 분개임/앱개발 해보고 싶으신 분친구가 필요한 복학생ㅜ.ㅜ<활동내용>1. 매 주 동아리원이 자율적으로 주최&참여하는 세미나- c언어, java, 포토샵 등 상세 내용 및 일정은 다름- 소규모 그룹 과외식으로 진행되기 때문에 매우매우 고퀄리티 보장!- 맞춤형 커스터마이징 수업- 세미나 후 친목도모용 뒷풀이~(~.~)~';

  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const isAdmin = useRecoilValue(isAdminState);

  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const toggleDetail = () => {};

  return (
    <S.Container>
      <S.Left>
        <S.TimeContainer>
          <S.Time1>
            10:00 <S.Time2>AM</S.Time2>
          </S.Time1>
          <S.Time2>2:00 PM</S.Time2>
        </S.TimeContainer>
        <S.InfoContainer>
          <S.Title>주간 세미나 일정</S.Title>
          <S.Detail isDetailOpen={isDetailOpen}>{detail}</S.Detail>
        </S.InfoContainer>
      </S.Left>
      {isAdmin ? (
        <S.Btn onClick={() => setIsModalOpen(true)}>
          <EditIcon />
        </S.Btn>
      ) : (
        <S.ArrowIcon
          variants={variants}
          alt="arrow"
          src={arrow}
          initial="notShow"
          animate={isDetailOpen ? 'show' : 'notShow'}
          onClick={() => setIsDetailOpen(!isDetailOpen)}
        />
      )}
    </S.Container>
  );
}
