import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
const  Container=styled.div`
    
`
const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title></Title>
        <FilterContainer>
            <Filter>Filter1</Filter>
            <Filter>Filter1</Filter>
        
        </FilterContainer>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList