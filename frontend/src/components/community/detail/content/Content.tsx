import React from 'react';
import WriteInfo from '@components/community/common/WriteInfo';
import { ArticleDetailType } from '@components/community/CommunityType';
import Buttons from '@components/community/common/Buttons';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import useDeleteArticle from '@query/delete/useDeleteArticle';
import confirm from '@components/common/popup/confirm/Confirm';
import * as C from './Content.style';

interface ContentProps {
  id: number;
  data: ArticleDetailType;
}

function Content({ id, data }: ContentProps) {
  const navigate = useNavigate();
  const { deleteArticle, isPending } = useDeleteArticle({ articleId: id });

  const updateArticle = () => {
    navigate(`${ROUTE.COMMUNITY.BASE}/${ROUTE.COMMUNITY.UPDATE}`, { state: data });
  };

  const deleteConfirm = () => {
    confirm({
      content: '정말 이 게시글을\n 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      isDangerous: true,
      onOk: deleteArticle,
    });
  };

  return (
    <>
      <C.Subject>{data.subject}</C.Subject>
      <WriteInfo grade={data.grade} name={data.name} date={data.date} />
      {data.images.map((image) => (
        <C.Image src={image.url} key={image.key} alt="image" />
      ))}
      <C.Content>{data.content}</C.Content>
      <Buttons
        normal={{ label: '수정', onClick: updateArticle, show: data.isMine, disabled: isPending }}
        dangerous={{ label: '삭제', onClick: deleteConfirm, show: data.isMine, disabled: isPending }}
      />
    </>
  );
}

export default Content;
