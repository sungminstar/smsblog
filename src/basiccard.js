import styled from "styled-components";
import Home from "./Pages/Home";

const Basiccard = () => {

  return (
    <BasicCard>
      <Comp>
        <Img src={"카드1.png"} />
        <Title>고정카드 1</Title>
        <Date>Feb 23, 2023</Date>
      </Comp>
      <Comp>
        <Img src={"카드1.png"} />
        <Title>고정카드 2</Title>
        <Date>Feb 23, 2023</Date>
      </Comp>
      <Comp>
        <Img src={"카드1.png"} />
        <Title>고정카드 3</Title>
        <Date>Feb 23, 2023</Date>
      </Comp>
      <Comp>
        <Img src={"카드1.png"} />
        <Title>고정카드 4</Title>
        <Date>Feb 23, 2023</Date>
      </Comp>
    </BasicCard>
  );
};

const BasicCard = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30%;
  padding: 3%;
  
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  
`;

const Comp = styled.div`
  width: 30%;
  height: 40%;
  // 왔다 갔다 하고 싶음
  padding: 3%;
  
  display: flex;
  flex-direction: column;

`;

const Img = styled.img`
  width: 70%;
  height: 50%;
  margin: 0 10%;
`;

const Title = styled.div`
  width: 100%;
  height: 20%;
  padding: 3%;
  margin: 0 10%;
`;

const Date = styled.div`
  width: 100%;
  height: 20%;
  padding: 3%;
  font-size: 10px;
  color: gray;
  margin: 0 10%;
`;
export default Basiccard;