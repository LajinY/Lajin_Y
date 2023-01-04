import { useState } from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const CartShownHandler = () => {
    SetCartIsShown(true);
  };

  const HideShownHandler = () => {
    SetCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideShownHandler} />}
      <Header onShowCart={CartShownHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
