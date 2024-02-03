/* eslint-disable no-use-before-define */
import React from 'react';
import confirm from '@components/common/popup/confirm/Confirm';
import usePatchApproval from '@query/patch/usePatchApproval';
import useDeleteApproval from '@query/delete/useDeleteApproval';
import * as A from './style/Approval.style';

interface UserData {
  id: number;
  department: string;
  name: string;
}

interface MemberItemProps {
  userData: UserData;
}

export default function ApprovalMemberItem({ userData }: MemberItemProps) {
  const { updateApproval, isPending } = usePatchApproval({ approvalId: userData.id });
  const { deleteApproval, isDeletePending } = useDeleteApproval({ approvalId: userData.id });
  const handleOk = () => {
    console.log('승인');
    updateApproval();
  };
  const handleCancel = () => {
    console.log('거절');
    deleteApproval();
  };
  const ClickAccept = () => {
    confirm({
      content: `${userData.name} 님을 HICC 회원으로 승인하시겠습니다?`,
      okText: '승인',
      cancelText: '거절',
      isDangerous: false, // Set to true if it's a dangerous action
      onOk: handleOk,
      onCancel: handleCancel,
    });
  };
  return (
    <A.MemberBox>
      <A.Major>{userData.department}</A.Major>
      <A.Name>{userData.name}</A.Name>
      <A.State onClick={ClickAccept}>
        <A.StateText>대기</A.StateText>
      </A.State>
    </A.MemberBox>
  );
}
