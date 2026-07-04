import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🎵 Melody Music Store</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Cart
        </Link>

        {isLoggedIn ? (
          <>
            <span>✅ Logged In</span>

            <button
              onClick={logout}
              style={{
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;