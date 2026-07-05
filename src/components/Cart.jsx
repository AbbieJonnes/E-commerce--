import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>🛒 Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>🛒 Shopping Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "20px",
          }}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            width="120"
          />

          <div style={{ flex: 1 }}>
            <h3>{item.title}</h3>

            <p>${item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button onClick={() => decreaseQuantity(item.id)}>
              -
            </button>

            <button
              onClick={() => increaseQuantity(item.id)}
              style={{ margin: "0 10px" }}
            >
              +
            </button>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;