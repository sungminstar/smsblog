import styled from "styled-components";

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
            <TitleContainer>
                <BigTitle> Sungmin's </BigTitle>
                <SmallTitle> Blog </SmallTitle>           
                <SNSContainter>
                    <sns1>a</sns1>
                    <sns2>b</sns2>
                    <sns3>c</sns3>
                    <sns4>d</sns4>
                </SNSContainter>
            </TitleContainer>
        </LeftContainer>
        </>
    );
  
}

const LeftContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    // 메인축 세로 설정 
`;

const TitleContainer = styled.p`
    height: 100px;
    margin: 0px 30px;
`;

const BigTitle = styled.p`
    color: rgb(0, 0, 0);
    font-size: 35px;
    margin: 600px 0px 0px 0px
`;

const SmallTitle = styled.p`
	color: rgb(0, 0, 0);
	font-size: 35px;
    margin: 0px 0px;
`;

const SNSContainter = styled.p`
    fond-size: 20px;
    padding: 10px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
`;


const RightComponent = (props) => {
    return (
        <>
            <CardContainer>
                <FixedCard>
                    <Right>
                        <card1>
                            <h1> card1 </h1>
                        </card1>
                        <card2>
                            <h1> card2 </h1>
                        </card2>
                    </Right>
                    <Left>
                        <card3>
                            <h1> card3 </h1>
                        </card3>
                        <card4>
                            <h1> card4 </h1>
                        </card4>
                    </Left>
                </FixedCard>
                <Card>
                    <card1>
                        <h3> card1 </h3>
                    </card1>
                    <card2>
                        <h3> card2 </h3>
                    </card2>
                    <card3>
                        <h3> card3 </h3>
                    </card3>
                </Card>
            </CardContainer>
        </>
    );
}

const CardContainer = styled.div`
    margin: 50px 100px;
    
 
`;

const FixedCard = styled.p`
    display: flex;
    flex-direction:  row;
    justify-content: space-between;

`;

const Right = styled.p`
    margin: 0px 300px;
`;

const Left = styled.p`
    margin: 0px 0px 0px 0px;
`;

const Card = styled.p`
    size: 50px;
    width: 500px;
    margin: 10px 300px;
    display: flex;
    flex-dirction: row;
    justify-content: space-between;
`;

export default App;

