import React from "react";
import { Card, notification } from "antd";

interface Params {
  img: string;
  description: string;
  title: string;
  price: number;
  id: number;
}

interface ProductProps {
  title: string;
  category: string;
  description: string;
  image: string;
  id: number;
  price: number;
  handleAddToCart: (props: Params) => void;
  handleAddToWishList: (props: Params) => void;
}

const { Meta } = Card;

const ProductCard: React.FC<ProductProps> = ({
  title,
  description,
  image,
  price,
  id,
  handleAddToCart,
  handleAddToWishList,
}) => {
  const OpenNotification = (placement: any) => {
    notification.info({
      message: '',
      description: "Added succesfully!",
      placement,
    });
  };
  return (
    <React.Fragment>
      <Card
        cover={
          <img
            alt="product to display"
            src={`${image}`}
            style={{ width: "100%", height: "180px" }}
          />
        }
        actions={[
          <p
            onClick={() => {
              handleAddToCart({ img: image, description, price, title, id });
              OpenNotification("bottomRight");
            }}
          >
            add to wishlist
          </p>,
          <p
            onClick={() => {
              handleAddToWishList({ img: image, description, price, title, id });
              OpenNotification("bottomRight");
            }}
            style={{ color: "#b30c5d" }}
          >
            add to cart
          </p>,
        ]}
      >
        <Meta title={title} description={`$${price}`} />
      </Card>
    </React.Fragment>
  );
};

export default ProductCard;
