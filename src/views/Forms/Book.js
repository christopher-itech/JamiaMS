import React from "react";
import Select from "react-select";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Table,
  Row,
  Col,
  Modal,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

function Book() {
  const [requiredClass, setRequiredClass] = React.useState("");
  const [className, setclassName] = React.useState("");
  const [boardType, setBoardType] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [modal, setModal] = React.useState(false);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="stacked-form">
              <Card.Header>
                <Card.Title as="h4">Books</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width">
                <Button
                  className="btn-wd btn-outline mt-4 ml-2 mb-3"
                  type="button"
                  onClick={() => setModal(!modal)}
                  variant="success"
                >
                  <span className="btn-label">
                    <i className="fas fa-plus"></i>
                  </span>
                  &nbsp;Add book
                </Button>
                {/* Mini Modal */}
                <Modal
                  className="modal-primary"
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  onHide={() => {setModal(!modal)}}
                  show={modal}
                >
                <Card.Header className="text-center">
                  <Card.Title as="h4">Add book</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form action="" className="form" method="">
                      <Card>
                        <Card.Body>
                          <Row>
                            <Col className="pr-1" md="6">
                              <Form.Group>
                                <label>Book name</label>
                                <Form.Control
                                  // defaultValue="Mike"
                                  placeholder=""
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="pr-1" md="6">
                              <Form.Group>
                                <label>Class</label>
                                <Select
                                  className="react-select primary"
                                  classNamePrefix="react-select"
                                  name="className"
                                  value={className}
                                  onChange={(value) => setclassName(value)}
                                  options={[
                                    { value: "1", label: "Class 1" },
                                    { value: "2", label: "Class 2" },
                                    { value: "3", label: "Class 3" },
                                    { value: "4", label: "Class 4" },
                                    { value: "5", label: "Class 5" },
                                  ]}
                                  placeholder="Single Select"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        <div className="clearfix"></div>
                        </Card.Body>
                      </Card>
                    </Form>
                  </Card.Body>
                  <div className="modal-footer">
                    <Button
                      className="btn-simple"
                      onClick={() => {setclassName(""); setModal(!modal)}}
                      variant="link"
                    >
                      Save
                    </Button>
                    <Button
                      className="btn-simple"
                      onClick={() => {setclassName(""); setModal(!modal)}}
                      variant="link"
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
                {/* End Modal */}      
                <Card className="stacked-form">
                  <Card.Header>
                    <Card.Title as="h5">Class 1</Card.Title>
                  </Card.Header>   
                  <Card.Body>      
                    <Table>
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th>Book name</th>
                          <th className="text-right">Number</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">1</td>
                          <td>Javascript Programming Professonal Guide 1</td>
                          <td className="text-right">11</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td>Javascript Programming Professonal Guide 2</td>
                          <td className="text-right">15</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>                    
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
                <Card className="stacked-form">
                  <Card.Header>
                    <Card.Title as="h5">Class 2</Card.Title>
                  </Card.Header>   
                  <Card.Body>      
                    <Table>
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th>Book name</th>
                          <th className="text-right">Number</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">1</td>
                          <td>Javascript Programming Professonal Guide 1</td>
                          <td className="text-right">11</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td>Javascript Programming Professonal Guide 2</td>
                          <td className="text-right">15</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>                    
                        <tr>
                          <td className="text-center">3</td>
                          <td>Javascript Programming Professonal Guide 3</td>
                          <td className="text-right">5</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>     
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>    
                <Card className="stacked-form">
                  <Card.Header>
                    <Card.Title as="h5">Class 3</Card.Title>
                  </Card.Header>   
                  <Card.Body>      
                    <Table>
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th>Book name</th>
                          <th className="text-right">Number</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">1</td>
                          <td>Javascript Programming Professonal Guide 1</td>
                          <td className="text-right">11</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td>Javascript Programming Professonal Guide 2</td>
                          <td className="text-right">15</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>                    
                        <tr>
                          <td className="text-center">3</td>
                          <td>Javascript Programming Professonal Guide 3</td>
                          <td className="text-right">5</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>     
                        <tr>
                          <td className="text-center">4</td>
                          <td>Javascript Programming Professonal Guide 4</td>
                          <td className="text-right">7</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>    
                        <tr>
                          <td className="text-center">5</td>
                          <td>Javascript Programming Professonal Guide 5</td>
                          <td className="text-right">9</td>
                          <td className="td-actions text-center">
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-981231696">
                                  Edit class..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="success"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              overlay={
                                <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                              }
                            >
                              <Button
                                className="btn-link btn-xs"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>    
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>            
              </Card.Body>              
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Book;
