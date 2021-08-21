/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import react, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Tab = ({ txt, tabIdx, setTabIdx, idx }) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (idx === tabIdx) setSelected(true);
    else setSelected(false);
  }, [tabIdx]);
  return (
    <StyledTab
      selected={selected}
      onClick={() => {
        setTabIdx(idx);
      }}
    >
      {txt}
    </StyledTab>
  );
};

export default Tab;

const StyledTab = styled.div`
  margin-right: 60px;
  height: 52px;
  color: ${(props) => (props.selected ? "black" : "grey")};
  line-height: 18px;
  display: flex;
  align-items: center;
  font-weight: ${(props) => (props.selected ? 600 : 400)};
`;
