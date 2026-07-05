import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products/Product.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.id === Number(id)
        );

        setProduct(foundProduct);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found.</h2>;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "40px",
        flexWrap: "wrap",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "350px",
          borderRadius: "10px",
        }}
      />

      <div style={{ flex: 1 }}>
        <h1>{product.title}</h1>

        <p style={{ color: "gray" }}>
          {product.category}
        </p>

        <h2 style={{ color: "green" }}>
          ${product.price}
        </h2>

        <p>{product.description}</p>

        <p>⭐ {product.rating}</p>

        <p>📦 Stock: {product.stock}</p>

        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor: "#222",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;