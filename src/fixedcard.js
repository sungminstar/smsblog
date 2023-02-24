import styled from "styled-components";
import { Link } from "react-router-dom";
const Fixedcard = () => {
// comp 통으로 링크랑 연결 시키려면? 저 위치에서
// state 배우기
  return (
    <FixedCard>
      <Comp>
        <Img src={"카드1.png"} />
        <Text>
          <Link to="/postview/1">
          <Title>고정카드 1</Title>
          </Link>
          <Date>Feb 23, 2023</Date>
        </Text>
      </Comp>
      <Comp>
        <Img src={"카드1.png"} />
        <Text>
          <Link to="/postview/2">
            <Title>고정카드 2</Title>
          </Link>
          <Date>Feb 23, 2023</Date>
        </Text>
      </Comp>
      <Comp>
        <Img src={"카드1.png"} />
        <Text>
          <Link to="/postview/3">
          <Title>고정카드 3</Title>
          </Link>
          <Date>Feb 23, 2023</Date>
        </Text>
      </Comp>
      <Comp>
        <Img src={"카드1.png"} />
        <Text>
          <Link to="/postview/4">
          <Title>고정카드 4</Title>
          </Link>
          <Date>Feb 23, 2023</Date>
        </Text>
      </Comp>
    </FixedCard>
  );
};
// 화면 길이에 따라 카드를 유동적으로 움직이게 하고 싶음
const FixedCard = styled.div`
  width: 100%;
  height: 40%;
  margin-left: 30%;
  padding: 3%;
  
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;

`;

const Comp = styled.div`
  width: 40%;
  height: 30%;
  padding: 1%;
  margin-right: 0;
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  width: 30%;
  height: 80%;
  padding: 1%;
`;
const Text = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  height: 50%;
  padding: 3%;
`;

const Date = styled.div`
  width: 100%;
  height: 25%;
  padding: 3%;
  font-size: 3px;

  color: gray;
`;
export default Fixedcard;