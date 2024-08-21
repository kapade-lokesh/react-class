import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { addItem } from "./reedux/CartSllice";
import axios from "axios";
const Fakestore = () => {
  const [data, setData] = useState([]);

  const dispacher = useDispatch();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    };
    fetchdata();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {data.map((item) => {
            item.quantity = 1;
            return (
              <Col sm={12} md={6} lg={4}>
                <Card
                  className="border border-danger m-3"
                  style={{ width: "18rem" }}
                >
                  <Card.Header style={{ height: 150 }}>
                    <Card.Img
                      className="w-100 h-100"
                      variant="top"
                      src={item.images[0]}
                    />
                  </Card.Header>
                  <Card.Body style={{ height: 200, overflow: "hidden" }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className=" w-100 d-felx justify-content-between aign-items-center">
                      <Button variant="primary" className="me-5">
                        Buy now
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          dispacher(addItem(item));
                        }}
                      >
                        add to cart
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Fakestore;
