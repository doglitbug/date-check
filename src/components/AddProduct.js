import { Form, Button, Accordion, Card } from "react-bootstrap";

const AddProduct = () => {
    return (
        <div>
            <Accordion>
                <Card>
                    <Card.Header variant="primary">
                        <Accordion.Toggle as={Card.Header} eventKey="0">Add Product</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product name" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Barcode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter barcode" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default AddProduct;