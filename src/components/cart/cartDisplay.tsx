import React from "react";
import { Col, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./cartCard";
// import { deleteProductFromCart } from "../../store/actions/handleProducts";

const styles = {
  container: {
    margin: "7%",
  },
};

const DisplayCartItems: React.FC<{}> = () => {
  const cartArr = useSelector((state: any) => state.cart);
  console.log(cartArr);
  const dispatch = useDispatch;
  const deleteProductFromCartFunc = (id: number) => {
    dispatch();
  };
  return (
    <React.Fragment>
      <Row style={styles.container}>
        <Col span={24}>
          <h1 style={{ color: "#b30c5d" }}>
            hello, louis...you have {cartArr.length} items loaded up in your
            cart
          </h1>
        </Col>
      </Row>
      <Row gutter={3}>
        {cartArr.map((item: any) => {
          return (
            <Col md={6} xs={12}>
              <CartCard
                title={item.title}
                description={item.description}
                id={item.id}
                image={item.img}
                price={item.price}
                category={item.category}
                fn={deleteProductFromCartFunc}
              />
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default DisplayCartItems;
