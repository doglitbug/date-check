import { useState, useEffect } from 'react';
import { FcCalendar } from "react-icons/fc";

import Search from "./components/Search";
import AddProduct from "./components/AddProduct";
import ProductInfo from "./components/ProductInfo";

function App() {

  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);
  let [query, setQuery] = useState("");

  const filteredProducts = products.filter(
    product => {
      return (
        product.id.includes(query) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      )
    }
  )
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await fetch('/api/categories')
      const body = await result.json();
      setCategories(body.categories)
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch('/api/products')
      const body = await result.json();
      setProducts(body.products)
    }
    fetchProducts();
  }, []);

  return (
    <div className="App container justify-content-center">
      <h1 className="display-1"><FcCalendar className="inline-block" />Date Check</h1>
      <AddProduct categories={categories} />
      <Search query={query}
        onQueryChange={myQuery => setQuery(myQuery)} />
      {filteredProducts.map(product => (
        <ProductInfo product={product} />
      ))}

    </div>
  );
}

export default App;