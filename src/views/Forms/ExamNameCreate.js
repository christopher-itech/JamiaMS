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

function ExamNameCreate() {
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
                <Card.Title as="h4">Exams</Card.Title>
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
                  &nbsp;Add exam
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
                  <Card.Title as="h4">Add Exam</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form action="" className="form" method="">
                      <Card>
                        <Card.Body>
                          <Row>
                            <Col className="pr-1" md="6">
                              <Form.Group>
                                <label>Exam name</label>
                                <Form.Control
                                  // defaultValue="Mike"
                                  placeholder=""
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="pl-1" md="6">
                              <Form.Group>
                                <label>Datetime</label>
                                <ReactDatetime
                                  inputProps={{
                                    className: "form-control",
                                    placeholder: "Date Picker",
                                  }}
                                  // timeFormat={false}
                                ></ReactDatetime>
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
                <Table>
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Exam Name</th>
                      <th className="text-right">Datetime</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>Exam name 1</td>
                      <td className="text-right">2023-03-11</td>
                      <td className="td-actions text-center">
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit
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
                      <td>Exam name 2</td>
                      <td className="text-right">2023-03-12</td>
                      <td className="td-actions text-center">
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit
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
                      <td>Exam name 3</td>
                      <td className="text-right">2023-03-15</td>
                      <td className="td-actions text-center">
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit
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
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default ExamNameCreate;
