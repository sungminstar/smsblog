import styled from "styled-components";

const Fixedcard = () => {

  return (
  <Container>
    <Img src = "/고정카드 1.png"/>
    <Img src = "/고정카드 2.png"/>
    <Img src = "/고정카드 3.png"/>
    <Img src = "/고정카드 4.png"/>
  </Container>
  );
};

const Container = styled.div`
  padding: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 70px;
  height: 30px;
`;

export default Fixedcard;