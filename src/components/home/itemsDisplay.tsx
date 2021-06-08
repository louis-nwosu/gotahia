import React from "react";
//import ant design components
import { Row, Col } from "antd";
import "antd/dist/antd.css";
//import local components
import ProductCard from "./productCard";
import Footer from "./footer";
//import the dispatch hook
import { useSelector, useDispatch } from "react-redux";
//import function to ad products to cart
import {
  addProductToCart,
  addProductToWishList,
} from "../../store/actions/handleProducts";

//define the props interface
interface Props {
  currentTab: string | EventTarget;
}

//component styles
const itemsDisplayStyles: any = {
  container: {
    padding: "20px",
    marginTop: '20px'
  },
  cardMarg: {
    marginBottom: "20px",
  },
};

const ItemsDisplay: React.FC<Props> = ({ currentTab }) => {
  //define the dispatch hook
  const dispatch = useDispatch();
  //get the products array from the store
  const products: any[] = useSelector((state: any) => state.products);
  //filter the products array to get required products
  const electronics: any[] = products.filter(
    (product) => product.category === "electronics"
  );
  const mensClothing: any[] = products.filter(
    (product) => product.category === "men's clothing"
  );
  const jewelery: any[] = products.filter(
    (product) => product.category === "jewelery"
  );
  const womenClothes: any[] = products.filter(
    (product) => product.category === "women's clothing"
  );
  //function to add product to wishlist.
  const addProductToWishListFunc = (payload: any) => {
    dispatch(addProductToCart(payload));
  }; 
  //function to ass product to cart
  const addProdToCartFunc = (payload: any) => {
    dispatch(addProductToWishList(payload));
  }; 
  const renderTabs = () => {
    if (currentTab === "all products") {
      return (
        <Col
          md={20}
          xs={24}
          sm={24}
          style={{ display: "flex", margin: "auto" }}
        >
          <Row gutter={15}>
            {products.map((product: any) => {
              return (
                <Col md={6} xs={12} sm={6} style={itemsDisplayStyles.cardMarg}>
                  <ProductCard
                    description={product.description}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    id={product.id}
                    handleAddToWishList={addProductToWishListFunc}
                    handleAddToCart={addProdToCartFunc}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      );
    } else if (currentTab === "women's clothing") {
      return (
        <Col
          md={20}
          xs={24}
          sm={24}
          style={{ display: "flex", margin: "auto" }}
        >
          <Row gutter={15}>
            {womenClothes.map((product: any) => {
              return (
                <Col md={6} xs={12} sm={6} style={itemsDisplayStyles.cardMarg}>
                  <ProductCard
                    description={product.description}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    id={product.id}
                    handleAddToWishList={addProductToWishListFunc}
                    handleAddToCart={addProdToCartFunc}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      );
    } else if (currentTab === "men's clothing") {
      return (
        <Col
          md={20}
          xs={24}
          sm={24}
          style={{ display: "flex", margin: "auto" }}
        >
          <Row gutter={15}>
            {mensClothing.map((product: any) => {
              return (
                <Col md={6} xs={12} sm={6} style={itemsDisplayStyles.cardMarg}>
                  <ProductCard
                    description={product.description}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    id={product.id}
                    handleAddToWishList={addProductToWishListFunc}
                    handleAddToCart={addProdToCartFunc}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      );
    } else if (currentTab === "electronics") {
      return (
        <Col
          md={20}
          xs={24}
          sm={24}
          style={{ display: "flex", margin: "auto" }}
        >
          <Row gutter={15}>
            {electronics.map((product: any) => {
              return (
                <Col md={6} xs={12} sm={6} style={itemsDisplayStyles.cardMarg}>
                  <ProductCard
                    description={product.description}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    id={product.id}
                    handleAddToWishList={addProductToWishListFunc}
                    handleAddToCart={addProdToCartFunc}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      );
    } else if (currentTab === "jewelery") {
      return (
        <Col
          md={20}
          xs={24}
          sm={24}
          style={{ display: "flex", margin: "auto" }}
        >
          <Row gutter={15}>
            {jewelery.map((product: any) => {
              return (
                <Col md={6} xs={12} sm={6} style={itemsDisplayStyles.cardMarg}>
                  <ProductCard
                    description={product.description}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    id={product.id}
                    handleAddToWishList={addProductToWishListFunc}
                    handleAddToCart={addProdToCartFunc}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      );
    }
  };

  return (
    <React.Fragment>
      <div style={itemsDisplayStyles.container}>
        <Row>{renderTabs()}</Row>
      </div>
     {products.length !== 0 &&  <Footer />}
    </React.Fragment>
  );
};

export default ItemsDisplay;
