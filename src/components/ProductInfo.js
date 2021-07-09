import { Accordion, Card, Button } from "react-bootstrap";
import { FcDisapprove } from "react-icons/fc"

const ProductInfo = ({ product, onDeleteExpiry }) => {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey={product.id}>
                    {product.description}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={product.id}>
                <Card.Body>
                    Category: {product.category.description}<br />
                    Dates:
                    <ul className="list">
                        {product.expiry.sort(function (a, b) { return a.date < b.date ? -1 : 1 }).map(expiry => (
                            <li key={expiry.id}>
                                <div>
                                    <Button variant="light" onClick={() => onDeleteExpiry(product.id, expiry.id)}>
                                        <FcDisapprove />
                                    </Button>
                                    {expiry.date}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Card.Body>
            </Accordion.Collapse>
        </Card >
    )
}

export default ProductInfo;