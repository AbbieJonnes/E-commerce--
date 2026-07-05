# Melody Music Store

## Project Description

Melody Music Store is a React-based e-commerce web application where users can browse products, view product details, search for products, add items to a shopping cart, register or log in, and proceed to a protected checkout page. The project demonstrates the use of React components, React Router, Context API, and data fetching from an external API.

## Features

- Home page
- Responsive navigation bar
- Product listing fetched from an API
- Product details page
- Shopping cart
- User registration
- User login
- Protected checkout page
- Authentication using Context API
- Cart management using Context API
- Responsive layout

## Technologies Used

- React
- Vite
- React Router DOM
- Context API
- JavaScript
- CSS
- Fetch API

## Project Structure

```
src/
│
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Checkout.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository:

```bash
git clone https://github.com/AbbieJonnes/E-commerce--.git
```

Navigate into the project folder:

```bash
cd E-commerce--
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Usage

1. Open the application in your browser.
2. Browse the available products.
3. View product details.
4. Add products to the cart.
5. Register or log in.
6. Proceed to the protected checkout page.

## Future Improvements

- Search and category filtering
- Wishlist functionality
- Quantity update buttons with improved styling
- Toast notifications
- Related products section
- Persistent authentication using localStorage
- Backend integration for user authentication and orders

## Author

GitHub: https://github.com/AbbieJonnes

Email: abigaelmwangi534@gmail.com

## License

This project is for educational purposes.