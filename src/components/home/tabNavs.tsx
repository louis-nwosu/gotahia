import React from "react";
import { Col, Row } from "antd";

type CategoriesType = string[] | null;
interface Props {
  setTabFunc: (tab: string | EventTarget) => void;
}

const TabNavs: React.FC<Props> = ({setTabFunc}) => {
  let [categories, setCategories] = React.useState<CategoriesType>(null);
  React.useEffect(() => {
    const loadCat = async () => {
      const catData: any = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const catJson: any = await catData.json();
      setCategories(["all products", ...catJson]);
    };
    loadCat();
  }, []);

  //set what category to show

  const renderTabs = () =>
    categories == null ? (
      <p>Loading...</p>
    ) : (
      <React.Fragment>
        {categories.map((cat) => {
          return (
            <Col
              md={3}
              style={{ color: "#fff", fontWeight: "bold", cursor: "pointer" }}
            >
              <p onClick={(e) => setTabFunc(cat)} style={{textAlign: 'center'}}>{cat}</p>
            </Col>
          );
        })}
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <Row
        style={{
          background: "lightgrey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          marginTop: "4.5%",
        }}
      >
        {renderTabs()}
      </Row>
    </React.Fragment>
  );
};

export default TabNavs;
