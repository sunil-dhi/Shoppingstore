import styled from "styled-components"
const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: whitesmoke;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: 700;
`
const Announcement = () => {
  return (
    <Container>Hurry up! Free shipping over $80 order</Container>
  )
}

export default Announcement