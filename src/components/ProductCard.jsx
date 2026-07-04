import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h2 style={{ fontSize: "18px" }}>{product.title}</h2>

        <p style={{ color: "#666", margin: "8px 0" }}>
          {product.category}
        </p>

        <h3 style={{ color: "green" }}>${product.price}</h3>

        <p>
          ⭐ {product.rating} | Stock: {product.stock}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#222",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>

          <Link
            to={`/products/${product.id}`}
            style={{
              padding: "10px 15px",
              backgroundColor: "#007bff",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;