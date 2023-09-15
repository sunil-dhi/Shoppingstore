import styled from "styled-components"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Container=styled.div`
background-color: red;
width: 100%;
height: 100vh;
display: flex;
position: relative;
`
const Arrow=styled.div`
height: 25px;
width: 25px;
border-radius: 50%;
background-color: white;
color: black;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=>props.direction==='left' && '10px'};
right: ${props=>props.direction==='right' && '10px'};
cursor: pointer;
`
const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
           <ArrowBackOutlinedIcon />
        </Arrow>
        <Arrow direction="right">
           <ArrowForwardOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider