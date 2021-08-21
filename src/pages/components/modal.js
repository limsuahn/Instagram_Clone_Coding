/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import react, { useState } from "react";

import styled from "@emotion/styled";

const Modal = ({ setModalVisible }) => {
  return (
    <StyledModalWrapper>
      <StyledModalButton
        css={css`
          font-weight: bold;
          color: red;
        `}
      >
        신고
      </StyledModalButton>
      <StyledModalButton>태그된 계정</StyledModalButton>
      <StyledModalButton>공유대상</StyledModalButton>
      <StyledModalButton>링크복사</StyledModalButton>
      <StyledModalButton>퍼가기</StyledModalButton>
      <StyledModalButton
        css={css`
          border-bottom: none;
        `}
        onClick={() => {
          setModalVisible(false);
        }}
      >
        취소
      </StyledModalButton>
    </StyledModalWrapper>
  );
};

export default Modal;

const StyledModalButton = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 17px 0;
  font-size: 14px;
  border-bottom: 1px solid grey;
`;

const StyledModalWrapper = styled.div`
  width: 400px;
  border-radius: 13px;
  height: fit-content;
  border: 1px solid grey;
  position: absolute;
  bottom: -450px;
  left: 300px;
`;
