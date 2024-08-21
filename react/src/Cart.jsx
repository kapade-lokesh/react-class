import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, decreseQty, increaseQty } from "./reedux/CartSllice";
const Cart = () => {
  const { cart } = useSelector((state) => state.cartdata);
  const dispatch = useDispatch();
  return (
    <div className="">
      <Container>
        <Row>
          {cart.length == 0
            ? "Cart is empty"
            : cart.map((item) => {
                console.log("loop", item);
                console.log(item.id);
                return (
                  <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={item.images[0]} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Button variant="warning" className="w-100">
                          Buy now
                        </Button>
                      </Card.Body>

                      <Card.Footer className=" d-flex justify-content-between align-item-center">
                        <Button
                          onClick={() => {
                            dispatch(increaseQty(item.id));
                          }}
                          className="w-25"
                        >
                          +
                        </Button>
                        <p>{item.quantity}</p>
                        <Button
                          onClick={() => {
                            dispatch(decreseQty(item.id));
                          }}
                          className="w-25"
                        >
                          {" "}
                          -
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })}
        </Row>

        <Button
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          clear cart
        </Button>
      </Container>
    </div>
  );
};

export default Cart;
