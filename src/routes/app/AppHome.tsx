import { useEffect } from "react";
import styled from "@emotion/styled";

import { MdMiscellaneousServices } from "react-icons/md";
import ShadowBox from "@components/ShadowBox";

function AppHome() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>홈</h1>
      <Content>
        <ShadowBox>
          <h2>투두리스트 다루기</h2>
          <p>
            카테고리를 누르시면 새로운 할 일을 만들고, 수정하고, 삭제하실 수
            있습니다.
          </p>
        </ShadowBox>
        <ShadowBox>
          <h2>카테고리 다루기</h2>
          <p>
            <MdMiscellaneousServices />를 누르시면 카테고리를 생성하고,
            수정하고, 삭제하실 수 있습니다.
          </p>
        </ShadowBox>
      </Content>
    </div>
  );
}
export default AppHome;

const Content = styled.div`
  & > div {
    margin-bottom: 0.5rem;
  }
`;
