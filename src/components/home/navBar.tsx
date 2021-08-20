import React from "react";
//import ant desing components
import { Row, Col, Typography } from "antd";
import { Badge } from "antd";
import { ShoppingCartOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.css";
//import local components
import TabNavs from "./tabNavs";
//import useSelector hook
import { useSelector } from "react-redux";
//import link comp
import { Link } from "react-router-dom";

interface Props {
  setTabFunc: (tab: string | EventTarget) => void;
}

const AppBar: React.FC<Props> = ({ setTabFunc }) => {
  const wishlistLength: any[] = useSelector((state: any) => state.wishList);
  const cartLength: any[] = useSelector((state: any) => state.cart);
  return (
    <React.Fragment>
      <Row>
        <Col span={24} className="navContainer">
          <Row>
            <Col md={6} xs={12}>
              <Typography>
                <p className="navText">Gotahia express</p>
              </Typography>
            </Col>
            <Col md={6} xs={8} className="navLinkSection">
              <div className="badgeAndIcon">
                <Link to="/wishList">
                  <Badge count={wishlistLength.length}>
                    <UnorderedListOutlined className="iconLinks" />
                  </Badge>
                </Link>
              </div>
              <div className="badgeAndIcon">
                <Link to="/cart">
                  <Badge count={cartLength.length}>
                    <ShoppingCartOutlined className="iconLinks" />
                  </Badge>
                </Link>
              </div>
            </Col>
            <Col md={2} xs={8} className="navUserDetails">
              <p style={{ paddingTop: "10px", cursor: "pointer" }}>
                hello, louis
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <TabNavs setTabFunc={setTabFunc} />
    </React.Fragment>
  );
};

export default AppBar;
