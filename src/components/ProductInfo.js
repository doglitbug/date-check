import { FcEmptyTrash } from "react-icons/fc";
import { Button } from "react-bootstrap";

const ProductInfo = ({ product, categories }) => {
    return (
    < div >
        <h4><Button variant="outline-danger"><FcEmptyTrash /></Button>{product.description}</h4>
        <h6>Category: {categories[product.categoryID].description}</h6>
        <hr />
    </div >
    )
}

export default ProductInfo;