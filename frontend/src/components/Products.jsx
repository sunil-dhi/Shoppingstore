import styled from "styled-components"
import { popularProducts } from "../pages/data"
import Product from "./Product"
const Container=styled.div`
`
const Products = () => {
  return (
    
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products