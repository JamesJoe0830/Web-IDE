import { Link } from "react-router-dom";

function New() {
  //   useRecoilValue -> 값만 사용
  //   useSetRecoilState -> 변경 함수 사용
  //   useRecoilState -> 값, 변경 함수 둘다 사용
  return (
    <div>
      변경사항 확인- 팀 레포에 병합
      <Link to="/test">useRef</Link>
    </div>
  );
}

export default New;
