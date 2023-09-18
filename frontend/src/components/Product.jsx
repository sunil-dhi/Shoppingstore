import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div``;
const Circle = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;
const Product = ({ item }) => {
  return (
    <Container>
      <Circel />
      <Image />
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
