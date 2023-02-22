import styled from "styled-components";
import Fixedcard from "./fixedcard";
import Card from "./card";

const App = (props) => {
    return (
        <div>
            <LeftComponent />
            <RightComponent />
        </div>
    );
}

const LeftComponent = (props) => {
    return (
        <>
        <LeftContainer>
            <Container>
                <TitleContainer>
                    <p>Sungmin's</p>
                    <p>Blog</p>
                </TitleContainer>
                <SNSContainer>
                    <SnsItems></SnsItems>
                    <SnsItems></SnsItems>
                    <SnsItems></SnsItems>
                    <SnsItems></SnsItems>
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
    height: 40%;


    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
`;

const TitleContainer = styled.div`
    width: 70%;
    height: 50%;
    //border-bottom: 1px solid white;
    margin-top: 570px;
    font-size: 30px;
    
`;

const SNSContainer = styled.div`
    width: 100%;
    height: 10%;
    
    display: flex;
    flex-direction: row;
    border-top: 1px solid white;
    justify-content: space-between;
`;

const SnsItems = styled.div`
    width: 30px;
    height: 30px;

    background-color: white;
`;
/*
const box = styled.div`
    width: 10px;
    height: 10px;
    border: 1x solid white;
    background-color: white;
    
`;*/


const RightComponent = (props) => {
    return (
        <>
        <RightContainer>
            <Fixedcard></Fixedcard>
            <Card></Card>
        </RightContainer>
        </>
    );
  
}

const RightContainer = styled.div`
    width: 100vw;
    height: 100vh;

    margin-left: 30%;

    background-color: purple;
`;

export default App;

