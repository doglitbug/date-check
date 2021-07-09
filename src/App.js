import { useState, useEffect } from 'react';
import { FcCalendar } from "react-icons/fc";
import { Accordion } from 'react-bootstrap';

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


  //#region API calls
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
  //#endregion

  //#region Data functions
  function onDeleteExpiry(productId, expiryId) {
    console.log("Deleting: " + expiryId + " from " + productId);

    const deleteExpiry = async () => {
      const result = await fetch('api/expiry/' + expiryId, { method: 'DELETE' });
      //const body = await result.json();
      //TODO check result for error in deleting etc?

      //Split product to edit off
      let product = products.filter(item => item.id === productId)
      
      //Remove date from product
      product[0].expiry = product[0].expiry.filter(item => item.id !== expiryId)

      setProducts([...products]);
    }

    deleteExpiry();
  }
  //#endregion

  return (
    <div className="App container justify-content-center">
      <h1 className="display-1"><FcCalendar className="inline-block" />Date Check</h1>
      <Accordion>

        <Search query={query}
          onQueryChange={myQuery => setQuery(myQuery)} />

        <AddProduct categories={categories} />

        {filteredProducts.map(product => (
          <ProductInfo
            key={product.id}
            product={product}
            onDeleteExpiry={onDeleteExpiry}
          />
        ))}

      </Accordion>
    </div>
  );
}

export default App;