import { useState, useEffect } from 'react';
import { FcCalendar } from "react-icons/fc";
import Search from "./components/Search";
import AddProduct from "./components/AddProduct";

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await fetch('/api/categories')
      const body = await result.json();
      setCategories(body.categories)
    }
    fetchCategories();
  }, []);


  return (
    <div className="App container justify-content-center">
      <h1 className="display-1"><FcCalendar className="inline-block" />Date Check</h1>
      <AddProduct categories={categories} />
      <Search />
    </div>
  );
}

export default App;