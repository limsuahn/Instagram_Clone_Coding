/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import react, { useState } from "react";
import styled from "@emotion/styled";

const Comment = ({ ProfileImag, userName, contents, date, setDay }) => {
  return (
    <StyledWrapper>
      <div
        css={css`
          background-color: white;
          padding: 15px 17px 15px 17px;
        `}
      >
        <RoundProfileStyle src={ProfileImag} />
      </div>

      <div>
        <StyledContentsWrapper>
          <StyledLink
            css={css`
              font-weight: bold;
            `}
            href="https://www.google.com"
          >
            {userName}
          </StyledLink>
          <span
            css={css`
              color: black;
              font-size: 14px;
            `}
          >
            {contents}
          </span>
        </StyledContentsWrapper>
        <div
          css={css`
            display: flex;
            font-size: 14px;
          `}
        >
          <StyledDate
            onClick={() => {
              setDay(date + 1);
            }}
          >
            {date}일
          </StyledDate>
          <div
            css={css`
              margin-left: 15px;
              cursor: pointer;
              font-weight: bold;
              color: rgb(142, 142, 142);
              font-size: 14px;
            `}
          >
            답글달기
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Comment;

const RoundProfileStyle = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
`;

const StyledDate = styled.div`
  font-size: 14px;
  color: rgb(100, 100, 100);
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;
const StyledWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const StyledContentsWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;
