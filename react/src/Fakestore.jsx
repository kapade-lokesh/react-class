import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
const Fakestore = () => {
  const [data, setData] = useState([]);

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
            return (
              <Col sm={12} md={6} lg={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.images[0]} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">Buy now</Button>
                  </Card.Body>
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
