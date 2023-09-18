import { SendOutlined } from "@mui/icons-material"
import styled from "styled-components"
const Container=styled.div`
    display: flex;
    height: 60vh;
    align-items: center;
    justify-content: center;
    background-color: #c2f3c6;
    flex-direction: column;
`
const Title=styled.h1`
font-weight: 700;
font-size: 45px;
margin: auto;
`
const Desc=styled.div`
    font-size: 35px;
    margin-bottom: 20px;
`
const InputContainer=styled.div`
display: flex;
justify-content: space-between;
/* border: 1px solid gray; */
border-radius: 10%;
height: 40px;
width: 50%;
margin-bottom: 10px;
`
const Input=styled.input`
    border: none;
    flex: 7;
    font-size: 25px;
`
const Button=styled.button`
flex: 1;
cursor: pointer;
`
const NewsLetter = () => {
  return (
    <Container>
     <Title>Newsletter</Title>
     <Desc>To get updates please show up here!</Desc>
     <InputContainer>
     <Input placeholder="Enter your E-mail"/>
     <Button>
        <SendOutlined /> 
     </Button>
     </InputContainer>
    </Container>
  )
}

export default NewsLetter