import { Accordion, Card } from "react-bootstrap";

const ProductInfo = ({ product }) => {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey={product.id}>
                    {product.description}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={product.id}>
                <Card.Body>
                    Category: {product.category.description}
                </Card.Body>
            </Accordion.Collapse>
        </Card >
    )
}

export default ProductInfo;