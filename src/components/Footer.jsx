function Footer() {
    return (
      <footer
        style={{
          backgroundColor: "#222",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <h3>🎵 Melody Music Store</h3>
  
        <p style={{ margin: "10px 0" }}>
          Your one-stop shop for quality musical instruments.
        </p>
  
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            margin: "15px 0",
            flexWrap: "wrap",
          }}
        >
          <span>🎸 Guitars</span>
          <span>🎹 Keyboards</span>
          <span>🥁 Drums</span>
          <span>🎻 Violins</span>
        </div>
  
        <p style={{ fontSize: "14px", color: "#bbb" }}>
          © {new Date().getFullYear()} Melody Music Store. All Rights Reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;