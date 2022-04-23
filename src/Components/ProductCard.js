import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "300px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/products/${product.id}`}>
            <Button variant="primary">details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
