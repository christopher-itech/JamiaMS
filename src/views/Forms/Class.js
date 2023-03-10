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

function Class() {
  const [requiredClass, setRequiredClass] = React.useState("");
  const [classType, setClassType] = React.useState("");
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
                <Card.Title as="h4">Classes</Card.Title>
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
                  &nbsp;Add class
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
                  <Card.Title as="h4">Add class</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form action="" className="form" method="">
                      <Card>
                        <Card.Body>
                          <Row>
                            <Col className="pr-1" md="6">
                              <Form.Group>
                                <label>Class name</label>
                                <Form.Control
                                  // defaultValue="Mike"
                                  placeholder=""
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="pr-1" md="6">
                              <Form.Group>
                                <label>Class type</label>
                                <Select
                                  className="react-select primary"
                                  classNamePrefix="react-select"
                                  name="classType"
                                  value={classType}
                                  onChange={(value) => setClassType(value)}
                                  options={[
                                    { value: "1", label: "Federal" },
                                    { value: "2", label: "Local" },
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
                      onClick={() => {setClassType(""); setModal(!modal)}}
                      variant="link"
                    >
                      Save
                    </Button>
                    <Button
                      className="btn-simple"
                      onClick={() => {setClassType(""); setModal(!modal)}}
                      variant="link"
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
                {/* End Modal */}   
                <Card.Body>            
                  <Table>
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th>Class Name</th>
                        <th className="text-right">Class Type</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>Class 1</td>
                        <td className="text-right">Pending</td>
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
                              <Tooltip id="tooltip-48903503">
                                Add books..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-link btn-xs"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              variant="info"
                            >
                              <i className="fas fa-book"></i>
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
                        <td>Class 2</td>
                        <td className="text-right">Federal</td>
                        <td className="td-actions text-center">
                          <OverlayTrigger
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            overlay={
                              <Tooltip id="tooltip-981231696">
                                Add books..
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
                              <Tooltip id="tooltip-48903503">
                                Add books..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-link btn-xs"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              variant="info"
                            >
                              <i className="fas fa-book"></i>
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
                        <td>Class 3</td>
                        <td className="text-right">Federal</td>
                        <td className="td-actions text-center">
                          <OverlayTrigger
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            overlay={
                              <Tooltip id="tooltip-981231696">
                                Add books..
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
                              <Tooltip id="tooltip-48903503">
                                Add books..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-link btn-xs"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              variant="info"
                            >
                              <i className="fas fa-book"></i>
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
                        <td>Class 4</td>
                        <td className="text-right">Federal</td>
                        <td className="td-actions text-center">
                          <OverlayTrigger
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            overlay={
                              <Tooltip id="tooltip-981231696">
                                Add books..
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
                              <Tooltip id="tooltip-48903503">
                                Add books..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-link btn-xs"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              variant="info"
                            >
                              <i className="fas fa-book"></i>
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
                        <td>Class 5</td>
                        <td className="text-right">Federal</td>
                        <td className="td-actions text-center">
                          <OverlayTrigger
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            overlay={
                              <Tooltip id="tooltip-981231696">
                                Add books..
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
                              <Tooltip id="tooltip-48903503">
                                Add books..
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-link btn-xs"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              variant="info"
                            >
                              <i className="fas fa-book"></i>
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
              </Card.Body>              
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Class;
