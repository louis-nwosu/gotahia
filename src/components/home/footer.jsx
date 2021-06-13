import { Row, Col } from "antd";

const styles = {
  container: {
    backgroundColor: "#b30c5d",
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '7%',
    paddingRight: '7%',
    width: '100%'
  },
};

const Footer = () => {
  return (
    <div style={styles.container}>
      <Row style={{width: '100%'}}>
        <Col span={24}>
          <h3 style={{color: '#fff'}}>Gotahia express.</h3>
          <p style={{color: '#fff', fontWeight: 'bold'}}> made by louis </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;