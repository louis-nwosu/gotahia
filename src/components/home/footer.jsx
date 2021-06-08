import { Row, Col } from "antd";
import React from "react";

const styles = {
  container: {
    backgroundColor: "#b30c5d",
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '7%',
    paddingRight: '7%'
  },
};

const Footer = () => {
  return (
    <div style={styles.container}>
      <Row>
        <Col>
          <h3 style={{color: '#fff'}}>Gotahia express.</h3>
          <p style={{color: '#fff', fontWeight: 'bold'}}> made by louis </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;