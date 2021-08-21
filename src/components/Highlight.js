/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import react, { useState } from "react";
import styled from "@emotion/styled";

const Highlight = ({ title, imgUrl }) => {
  return (
    <Wrapper>
      <HighlightCoverImagWrapper>
        <HighlightCoverImag src={imgUrl} />
      </HighlightCoverImagWrapper>
      <HighlightTitleStyle>{title}</HighlightTitleStyle>
    </Wrapper>
  );
};

export default Highlight;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 10px 15px 10px 15px;
`;

const HighlightCoverImag = styled.img`
  width: 77px;
  height: 77px;
  border-radius: 70%;
`;

const HighlightCoverImagWrapper = styled.div`
  width: 87px;
  height: 87px;
  border-radius: 70%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(200, 200, 200);
`;

const HighlightTitleStyle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 85px;
  padding-top: 15px;
  font-weight: 600;
`;
