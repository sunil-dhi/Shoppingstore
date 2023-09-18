import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
min-width: 280px;
flex:1;
margin:5px;
height: 350px;
`;
const Circle = styled.div``;
const Image = styled.img`
height:75%;
`;
const Info = styled.div``;
const Icon = styled.div``;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          
          <ShoppingBasketOutlined />
        </Icon>
        <Icon>
          
          <SearchOutlined />
        </Icon>
        <Icon>
          
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
