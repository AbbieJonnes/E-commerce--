function Cart() {
    return (
      <div style={{ padding: "40px" }}>
        <h1>🛒 Shopping Cart</h1>
  
        <p style={{ marginTop: "20px" }}>
          Your selected musical instruments will appear here.
        </p>
  
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>Your Cart is Empty</h3>
  
          <p>Add some instruments to begin your musical journey! 🎵</p>
        </div>
      </div>
    );
  }
  
  export default Cart;