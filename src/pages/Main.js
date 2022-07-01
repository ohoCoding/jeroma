import React from "react"
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  const changeWeather = () => {
    navigate('/weather');
  }
  const changeSplash = () => {
    navigate('/splash');
  }
  return(
    <MainContent>
      <Container>
        <TitleBox>
            <Title>선택하세요</Title>
        </TitleBox>
        <ButtonBox>
            <Button onClick={changeWeather}>날씨</Button>
            <Button onClick={changeSplash}> 스플래쉬</Button>
        </ButtonBox>
      </Container>
    </MainContent>
  )
}

const MainContent = styled.div`
    margin: auto;
    min-width: 290px;
    max-width: 460px;
    position: relative;
`
const Container = styled.div`
    margin: auto 50px;
`
const TitleBox = styled.div`
    margin-top: 55px;
`;
const Title = styled.div`
    font-size: 21px;
    font-weight: bold;
    text-align: center;
    color: #0d0d0d;
    margin-bottom: 5px;
`
const ButtonBox = styled.div`
    margin-top: 30px;
`
const Button = styled.button`
   width: 300px;
   height: 50px;
   border-radius: 5px;
   margin: 15px 15px;
   border: 0px;
   background-color: #e0b574;
   /* background-color: ${({ disabled }) => disabled ? '#CFCFCF': '#3364eb'}; */
   color: white;
   font-size: 19px;
`
export default Main;