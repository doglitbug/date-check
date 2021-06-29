import { Form, Button, Accordion, Card, InputGroup } from "react-bootstrap";
import { FcPaid, FcBarChart, FcViewDetails } from "react-icons/fc";

const AddProduct = (props) => {
    return (
        <div>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">Add Product</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Name</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FcPaid />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control className="form-control" type="text" placeholder="Enter product name" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Barcode</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FcBarChart />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control className="form-control" type="text" placeholder="Enter barcode" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FcViewDetails />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>

                                        <Form.Control as="select">
                                            {props.categories.map(category => 
                                                <option key={category.id}>{category.description}</option>
                                            )}
                                        </Form.Control>

                                    </InputGroup>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                                <Button variant="primary" type="reset">
                                    Reset
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