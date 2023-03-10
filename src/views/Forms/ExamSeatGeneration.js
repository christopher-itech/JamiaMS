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

function ExamSeatGeneration() {
  const [requiredClass, setRequiredClass] = React.useState("");
  const [className, setclassName] = React.useState("");
  const [examName, setExamName] = React.useState({ value: "1", label: "Exam name 1" });
  const [curClass, setCurClass] = React.useState({ value: "1", label: "Class 1" });
  const [modal, setModal] = React.useState(false);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="stacked-form">
              <Card.Header>
                <Card.Title as="h4">Seat number generation</Card.Title>
              </Card.Header>
              <Card.Body>
              {/* <Card.Body className="table-full-width"> */}
                {/* <Card.Body> */}
                  <Row>
                    <Col className="p1-1" md="6">
                      <Form.Group>
                        <label>Exam name</label>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          name="examName"
                          value={examName}
                          onChange={(value) => setExamName(value)}
                          options={[
                            { value: "1", label: "Exam name 1" },
                            { value: "2", label: "Exam name 2" },
                            { value: "3", label: "Exam name 3" },
                            { value: "4", label: "Exam name 4" },
                            { value: "5", label: "Exam name 5" },
                          ]}
                          placeholder="Single Select"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="p1-1" md="6">
                      <Form.Group>
                        <label>Class</label>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          name="curClass"
                          value={curClass}
                          onChange={(value) => setCurClass(value)}
                          defaultValue={{ value: "1", label: "Class 1" }}
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
                {/* </Card.Body> */}
                {/* Mini Modal */}
                {/* <Modal
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
                </Modal> */}
                {/* End Modal */}      
                <Card className="stacked-form">
                  <Card.Header>
                    <Card.Title as="h5">Seat Numbers
                      {/* <Button className="btn-wd btn-round btn-outline ml-3" size="sm" type="submit" variant="info">
                        Generate
                      </Button> */}
                      <Button
                        className="btn-round btn-wd btn-outline ml-4"
                        type="button"
                        size="sm"
                      >
                        <span className="btn-label">
                          <i class="fas fa-sync"></i>
                        </span>
                        &nbsp;Generate
                      </Button>
                    </Card.Title>
                  </Card.Header>   
                  <Card.Body>      
                    <Table>
                      <thead>
                        <tr>
                          <th className="text-center">Seat Number</th>
                          <th>Student name</th>
                          <th className="text-center">Class</th>
                          <th className="text-center">ID card number</th>
                          <th className="text-center">Exam date</th>
                          <th className="text-center">Exam name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">1</td>
                          <td>Student Name 1</td>
                          <td className="text-center">Class 1</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td>Student Name 7</td>
                          <td className="text-center">Class 3</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">3</td>
                          <td>Student Name 21</td>
                          <td className="text-center">Class 2</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">4</td>
                          <td>Student Name 7</td>
                          <td className="text-center">Class 3</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">5</td>
                          <td>Student Name 2</td>
                          <td className="text-center">Class 3</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">6</td>
                          <td>Student Name 15</td>
                          <td className="text-center">Class 2</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">7</td>
                          <td>Student Name 11</td>
                          <td className="text-center">Class 2</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">8</td>
                          <td>Student Name 9</td>
                          <td className="text-center">Class 3</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">9</td>
                          <td>Student Name 20</td>
                          <td className="text-center">Class 1</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">10</td>
                          <td>Student Name 6</td>
                          <td className="text-center">Class 2</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">11</td>
                          <td>Student Name 2</td>
                          <td className="text-center">Class 3</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                        <tr>
                          <td className="text-center">12</td>
                          <td>Student Name 10</td>
                          <td className="text-center">Class 3</td>
                          <td className="text-center">2245-533745</td>
                          <td className="text-center">2023-03-11</td>
                          <td className="text-center">Exam name 1</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>    
              </Card.Body>   
              <Card.Footer>
                <Button className="btn-fill" type="submit" variant="info">
                  Submit
                </Button>
              </Card.Footer>           
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default ExamSeatGeneration;
