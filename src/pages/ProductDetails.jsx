import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
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

        <p
          style={{
            color: "gray",
            margin: "10px 0",
          }}
        >
          {product.category}
        </p>

        <h2 style={{ color: "green" }}>
          ${product.price}
        </h2>

        <p style={{ marginTop: "20px" }}>
          {product.description}
        </p>

        <p style={{ marginTop: "15px" }}>
          ⭐ Rating: {product.rating}
        </p>

        <p>
          📦 Stock: {product.stock}
        </p>

        <button
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