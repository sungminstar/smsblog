  import { Link } from "react-router-dom";
  import styled from "styled-components";
  import Fixedcard from "../fixedcard";
  import Basiccard from "../basiccard";

  const Home = () => {
      return (
          <div>
              <LeftComponent />
              <RightComponent />
          </div>
      );
  }
  
  const LeftComponent = () => {
      return (
          <>
          <LeftContainer>
              <Container>
                  <TitleContainer>Sungmin's</TitleContainer>
                  <TitleContainer>Blog</TitleContainer>
                  <Divider />
                  <SNSContainer>
                      <SnsItems />
                      <SnsItems />
                      <SnsItems />
                      <SnsItems />
                  </SNSContainer>
              </Container>
          </LeftContainer>
          </>
      );
    
  }
  
  const LeftContainer = styled.div`
      width: 30%;
      height: 100%;
  
      background-color: #0078FF;
      position: fixed;
  `;
  
  const Container = styled.div`
      width: 100%;
      height: 30%;
      margin-top: 450px;
      
      display: flex;
      flex-direction: column;
      
  `;
  
  const TitleContainer = styled.div`
      width: 70%;
      height: 20%;
      padding: 5%;
      margin: 0 10%;
      //font-size: 35px;
      // 글자 크기 키우면 넘침
      // 근데 SNS는 안 넘침;
      // 화면 줄이면 넘침
      // \\ 이렇게 생긴 공간들 없애고 싶음ㅜㅜ
      display: flex;
      flex-direction: column; 
  `;
  
  const Divider = styled.div`
      height: 1px;
      width: 80%;
      margin: 0 10% 5%;
      background-color: white;
  `;
  
  const SNSContainer = styled.div`
      width: 80%;
      height: 10%;
      padding: 0 10%;
      display: flex;
      justify-content: space-between;
  `;
  
  
  const SnsItems = styled.div`
      width: 20px;
      height: 20px;
      background-color: white;
  `;
  
  const RightComponent = (props) => {
      return (
          <>
          <RightContainer>
              <Fixedcard />
              <RightDivider />
              <Basiccard />
          </RightContainer>
          </>
      );
    
  }
  
  const RightContainer = styled.div`
      width: 100%;
      height: 100%;
  `;
  
  const RightDivider = styled.div`
      height: 1px;
      width: 80%;
      margin-left: 35%;
      background-color: gray;
  `;

export default Home;
//<Link to = "/postview/0001">
//        <p> 0001 포스트로 이동 </p>
//      </Link>
//      <Link to = "/postview/0002">
//        <p> 0002 포스트로 이동 </p>
//      </Link>

