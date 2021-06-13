import React from "react";
import { Card } from "antd";
import { notification } from "antd";

interface ProductProps {
  title: string;
  category?: string;
  description?: string;
  image: string;
  id: number;
  price: number;
  fn: (id: number) => void;
}

const { Meta } = Card;

const CartCard: React.FC<ProductProps> = ({
  title,
  image,
  price,
  id,
  fn,
}) => {
  const OpenNotification = (placement: any) => {
    notification.info({
      message: ``,
      description: "+1",
      placement,
    });
  };
  const OpenNotification2 = (placement: any) => {
    notification.info({
      message: ``,
      description: "deleted from cart",
      placement,
    });
  };
  return (
    <React.Fragment>
      <Card
        cover={
          <img
            alt="product"
            src={`${image}`}
            style={{ width: "80%", height: "150px" }}
          />
        }
        actions={[
          <p
            onClick={() => {
              //   handleAddToCart({ img: image, description, price, title });
              OpenNotification("bottomRight");
            }}
          >
            +1
          </p>,
          <p
            onClick={() => {
              fn(id);
              OpenNotification2("bottomRight");
            }}
            style={{ color: "#b30c5d" }}
          >
            delete from cart
          </p>,
        ]}
      >
        <Meta title={title} description={`$${price}`} />
      </Card>
    </React.Fragment>
  );
};

export default CartCard;
