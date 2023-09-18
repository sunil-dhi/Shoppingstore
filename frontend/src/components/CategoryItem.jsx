import styled from "styled-components"
import {mobile} from "../responisve"

const Container=styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
    
`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "20vh" })}

`
const Title=styled.h1`
font-weight: 600;
color: white;
`
const Info=styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button=styled.button`
cursor: pointer;
padding: 5px;
background-color: white;
border: none;
font-weight: 700;
color: green;
border-radius:10%;
margin-top: 15px;
`
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem