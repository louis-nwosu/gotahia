import React from "react";
import { Col, Row } from "antd";
import "./index.css";

type CategoriesType = string[] | null;
interface Props {
  setTabFunc?: (tab: string | EventTarget) => void;
}

const TabNavs: React.FC<Props> = ({ setTabFunc }) => {
  let [categories, setCategories] = React.useState<CategoriesType>(null);
  React.useEffect(() => {
    const loadCat = async () => {
      const catData: any = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const catJson: string[] = await catData.json();
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
              xs={4}
              style={{ color: "#fff", fontWeight: "bold", cursor: "pointer" }}
            >
              <p
                onClick={(e) => setTabFunc && setTabFunc(cat)}
                style={{ textAlign: "center" }}
              >
                {cat}
              </p>
            </Col>
          );
        })}
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <Row className='tabNavNavigation'>{renderTabs()}</Row>
    </React.Fragment>
  );
};

export default TabNavs;
