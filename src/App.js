import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ProductList from "./Components/ProductList";
import Navigation from "./Components/Navigation";
import Details from "./Components/Details";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
