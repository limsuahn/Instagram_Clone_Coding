/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import react, { useState } from "react";

import styled from "@emotion/styled";
import Comment from "../pages/components/comment.js";
import Modal from "../pages/components/modal.js";
import { useHistory } from "react-router-dom";

//Icons
import { AiFillHeart, AiOutlineHeart, AiOutlineSmile } from "react-icons/ai";
import {
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoBookmark,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";

const Post = () => {
  let history = useHistory();
  const [day, setDay] = useState(10);
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [likenum, setLikenum] = useState(3976);
  const [reply, setReply] = useState();
  const today = new Date();
  const [month, date] = [today.getMonth() + 1, today.getDate()];
  const [isModalVisible, setModalVisible] = useState(false);
  const handleSubmit = (e) => {
    setReply(e.target.value);
  };
  const moveToMyPage = () => {
    history.push("/");
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        padding-top: 50px;
      `}
    >
      <div
        css={css`
          display: flex;
          position: relative;
          justify-content: center;
        `}
      >
        <img
          css={css`
            width: 600px;
            height: 600px;
          `}
          src="/images/옥서니.PNG"
        />
        <div
          css={css`
            width: 33%;
          `}
        >
          <StyledProfileWrapper>
            <div
              css={css`
                display: flex;
              `}
            >
              <RoundProfileStyle
                onClick={moveToMyPage}
                src="/images/브루니네모.PNG"
              />
              <div
                css={css`
                  padding-left: 17px;
                `}
              >
                <div
                  css={css`
                    font-weight: bold;
                  `}
                >
                  <StyledLink>youlakk</StyledLink>
                </div>
                <div
                  css={css`
                    font-size: 13px;
                  `}
                >
                  Chiang Mai, Thailand
                </div>
              </div>
            </div>
            <IoEllipsisHorizontalSharp
              onClick={() => {
                setModalVisible(true);
              }}
            />
          </StyledProfileWrapper>

          <div
            css={css`
              border-bottom: 1px solid grey;
            `}
          >
            <div>
              <StyledWrapper>
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    padding: 15px 17px 20px 15px;
                  `}
                >
                  <RoundProfileStyle
                    onClick={moveToMyPage}
                    src="/images/브루니네모.PNG"
                  />
                </div>

                <div
                  css={css`
                    //margin-left: 12px;
                  `}
                >
                  <StyledContentsWrapper>
                    <StyledLink
                      css={css`
                        font-weight: bold;
                      `}
                      href="https://www.instagram.com/youlakk/"
                    >
                      youlakk
                    </StyledLink>

                    <span
                      css={css`
                        font-size: 14px;
                      `}
                    >
                      태국 파얍대학교 뒷골목에 있던 카페🌽정말
                      행복해보인당💛💛💛
                    </span>
                  </StyledContentsWrapper>
                  <div
                    css={css`
                      //margin-top: 25px;
                      margin-bottom: 20px;
                      color: navy;
                    `}
                  >
                    <StyledLink
                      css={css`
                        color: orange;
                        font-size: 14px;
                      `}
                      href="https://www.instagram.com/explore/tags/%EA%B3%A0%EA%B3%A0%ED%8C%AC%EC%B8%A03%EC%84%B8%EB%8C%80/"
                    >
                      #고고팬츠3세대
                    </StyledLink>
                  </div>
                  <div
                    css={css`
                      display: flex;
                    `}
                  >
                    <StyledDate
                      onClick={() => {
                        setDay(day + 1);
                      }}
                    >
                      {day}일
                    </StyledDate>
                  </div>
                </div>
              </StyledWrapper>
            </div>
            <div>
              <Comment
                ProfileImag="/images/브루니네모.PNG"
                userName={"limsuahn"}
                contents={"안녕 난 수안"}
                date={day}
                setDay={setDay}
              />

              <Comment
                ProfileImag="/images/브루니네모.PNG"
                userName={"sudal_lim"}
                contents={"나도 태국 갈래"}
                date={day}
                setDay={setDay}
              />

              <Comment
                ProfileImag="/images/브루니네모.PNG"
                userName={"limbaboooo"}
                contents={"바부야아아ㅏㅏㅇ아ㅏ"}
                date={day}
                setDay={setDay}
              />
            </div>
          </div>
          <div
            css={css`
              padding: 15px 17px 15px 17px;
              border-bottom: 1px solid grey;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <div>
                {like ? (
                  <AiFillHeart
                    onClick={() => {
                      setLike(false);
                      setLikenum(likenum - 1);
                    }}
                    css={IconStyle}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => {
                      setLike(true);
                      setLikenum(likenum + 1);
                    }}
                    css={IconStyle}
                  />
                )}
                <IoChatbubbleOutline css={IconStyle} />
                <IoPaperPlaneOutline css={IconStyle} />
              </div>
              <div>
                {bookmark == true ? (
                  <IoBookmark
                    onClick={() => {
                      setBookmark(false);
                    }}
                    css={IconStyle}
                  />
                ) : (
                  <IoBookmarkOutline
                    onClick={() => {
                      setBookmark(true);
                    }}
                    css={IconStyle}
                  />
                )}
              </div>
            </div>
            <div
              css={css`
                font-weight: bold;
                margin-top: 2px;
                margin-bottom: 2px;
              `}
            >
              좋아요 {likenum}개
            </div>
            <StyledDate fontSize={10}>
              {month}월 {date}일
            </StyledDate>
          </div>
          <div
            css={css`
              padding: 15px 15px;
              display: flex;
              align-items: center;
            `}
          >
            <AiOutlineSmile css={IconStyle} />
            <input
              css={css`
                margin-left: 17px;
                border: none;
              `}
              type="text"
              value={reply}
              placeholder="댓글 달기..."
              onChange={handleSubmit}
            />
            <ButtonStyle type="submit" disabled={reply === ""}>
              게시
            </ButtonStyle>
          </div>
        </div>
      </div>
      {isModalVisible && <Modal setModalVisible={setModalVisible} />}
    </div>
  );
};

export default Post;
//이 컴포넌트 다 다른 곳에서 쓸 수 있어

const RoundProfileStyle = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
`;

const StyledDate = styled.div`
  color: rgb(100, 100, 100);
  font-size: ${(props) => props.fontSize || 14}px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;
const StyledWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

const StyledContentsWrapper = styled.div`
  margin-bottom: 19px;
`;

const IconStyle = css`
  width: 24px;
  height: 24px;
`;

const ButtonStyle = styled.button`
  border: none;
  background: white;
  color: skyblue;
  font-weight: bold;
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  padding: 21px 17px 15px 19px;
  border-bottom: 1px solid grey;
  align-items: center;
  justify-content: space-between;
`;
