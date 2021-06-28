import { FcCalendar } from "react-icons/fc";
import Search from "./components/Search";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App container justify-content-center">
      <h1 className="display-1">
        <FcCalendar className="inline-block" />Date Check</h1>
      <AddProduct />
      <Search />
    </div>
  );
}

export default App;