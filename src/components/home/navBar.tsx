import React from "react";
//import ant desing components
import { Row, Col, Typography } from "antd";
import { Badge } from "antd";
import { ShoppingCartOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
//import local components
import TabNavs from "./tabNavs";
//import useSelector hook
import { useSelector } from "react-redux";
//import link comp
import { Link } from "react-router-dom";

interface Props {
  setTabFunc: (tab: string | EventTarget) => void;
}

const styleObj: any = {
  navText: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
  },
  navContainer: {
    paddingRight: "10px",
    paddingLeft: "10px",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    backgroundColor: "#b30c5d",
  },
  navLinkSection: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize: "18px",
    paddingLeft: "10px",
    paddingRight: "15px",
  },
  iconLinks: {
    paddingLeft: "5px",
    paddingRight: "10px",
    color: "#fff",
    fontSize: "18px",
  },
  navUserDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  badgeAndIcon: {
    marginLeft: "10px",
    marginRight: "10px",
  },
};

const AppBar: React.FC<Props> = ({ setTabFunc }) => {
  const wishlistLength: any[] = useSelector((state: any) => state.wishList);
  const cartLength: any[] = useSelector((state: any) => state.cart);
  return (
    <React.Fragment>
      <Row>
        <Col span={24} style={styleObj.navContainer}>
          <Row>
            <Col md={6} xs={12}>
              <Typography>
                <p style={styleObj.navText}>Gotahia express</p>
              </Typography>
            </Col>
            <Col md={6} xs={8} style={styleObj.navLinkSection}>
              <div style={styleObj.badgeAndIcon}>
                <Link to="/wishList">
                  <Badge count={wishlistLength.length}>
                    <UnorderedListOutlined style={styleObj.iconLinks} />
                  </Badge>
                </Link>
              </div>
              <div style={styleObj.badgeAndIcon}>
                <Link to="/cart">
                  <Badge count={cartLength.length}>
                    <ShoppingCartOutlined style={styleObj.iconLinks} />
                  </Badge>
                </Link>
              </div>
            </Col>
            <Col md={2} xs={8} style={styleObj.navUserDetails}>
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
