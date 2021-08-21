/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import react, { useState } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import Highlight from "../components/Highlight";
import HighlightData from "../pages/data/HighlightData";
import PostData from "../pages/data/Postdata";
import Tab from "./components/Tab";
const Tabdata = ["게시물", "동영상", "태그됨"];

const Mypage = () => {
  let history = useHistory();
  const [tabIdx, setTabIdx] = useState(0);
  const moveToMyPage = () => {
    history.push("/post");
  };
  return (
    <Wrapper>
      <div
        css={css`
          width: 935;
        `}
      >
        <HeadWrapper>
          <ProfileImgWrapper>
            <CircularProfileImag
              width={150}
              height={150}
              src="/images/브루니네모.PNG"
            />
          </ProfileImgWrapper>
          <div
            css={css`
              margin-left: 30px;
            `}
          >
            <div
              css={css`
                display: flex;
                padding-bottom: 20px;
              `}
            >
              <StyledNickname>youlakk</StyledNickname>
              <Styledfollowbutton>팔로우</Styledfollowbutton>
            </div>
            <div
              css={css`
                display: flex;
                margin-bottom: 20px;
              `}
            >
              <StyledlistItem>
                게시물
                <div css={StrongStyle}>1,222</div>
              </StyledlistItem>
              <StyledlistItem>
                팔로워
                <div css={StrongStyle}>98.2천</div>
              </StyledlistItem>
              <StyledlistItem>
                팔로우
                <div css={StrongStyle}>5</div>
              </StyledlistItem>
            </div>

            <div>
              <IntroWrapper>
                <div css={StrongStyle}>여락이들 _ 여행유튜버</div>
                <div
                  css={css`
                    color: #00376b2;
                  `}
                >
                  지역 및 여행 웹사이트
                </div>
                🌜우리의 세상은 가능성으로 가득 차있어
                <br /> ☀️현재는, 서울
                <br /> - <br />
                그래쓰 첫 미니앨범 굿즈 <br />
                8월 12일 - 8월 19일
                <br />
                <a
                  css={[StrongStyle, { color: "#00376B" }]}
                  href={"https://www.instagram.com/youlakk/"}
                >
                  bit.ly/2VLkh3a
                </a>
              </IntroWrapper>
              <div
                css={css`
                  font-size: 10px;
                `}
              >
                0.przia, __dladbwls, os_5959님 외 7명이 팔로우합니다
              </div>
            </div>
          </div>
        </HeadWrapper>
        <HighlightWrapper>
          {HighlightData.map((item, i) => (
            <Highlight title={item.title} imgUrl={item.imgUrl} />
          ))}
        </HighlightWrapper>
        <div
          css={css`
            display: flex;
            border-top: 1px solid rgb(219, 219, 219);
            justify-content: center;
          `}
        >
          {Tabdata.map((item, i) => (
            <Tab txt={item} tabIdx={tabIdx} setTabIdx={setTabIdx} idx={i} />
          ))}
        </div>
        {tabIdx === 0 && (
          <PostWrapper>
            {PostData.map((item) => (
              <PostCoverImg onClick={moveToMyPage} src={item} />
            ))}
          </PostWrapper>
        )}

        {tabIdx === 1 && <div>두번째 탭</div>}
        {tabIdx === 2 && <div>세번째 탭</div>}
      </div>
    </Wrapper>
  );
};

export default Mypage;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const HeadWrapper = styled.div`
  display: flex;
  margin-bottom: 44px;
`;
const ProfileImgWrapper = styled.div`
  min-width: 160px;
  width: 15vw;
  display: flex;
  justify-content: center;
`;

const CircularProfileImag = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border-radius: 70%;
`;

const HighlightWrapper = styled.div`
  display: flex;
  padding: 0 24px;
  margin-bottom: 53px;
`;

const StyledNickname = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin: -5px 0 -6px 0;
`;

const Styledfollowbutton = styled.button`
  background-color: skyblue;
  font-size: 14px;
  height: 30px;
  font-weight: 600;
  color: white;
  border-radius: 13%;
  border: 0;
  padding: 5px 9px;
  margin-left: 20px;
`;

const StyledlistItem = styled.div`
  margin-right: 40px;
  font-size: 16px;
  color: rgb(38, 38, 38);
  display: flex;
  font-weight: 400;
`;

const StrongStyle = css`
  font-weight: 600;
  color: rgb(38, 38, 38);
  text-decoration: none;
`;

const IntroWrapper = styled.div`
  line-height: 24px;
`;
const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 28px;
  width: fit-content;
`;

const PostCoverImg = styled.img`
  width: 293px;
  height: 293px;
  overflow: hidden;
`;
