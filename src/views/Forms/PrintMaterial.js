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
  Row,
  Col,
} from "react-bootstrap";

function PrintMaterial() {
  const [requiredClass, setRequiredClass] = React.useState("");
  const [dependency, setDependency] = React.useState({ value: "1", label: "School" });
  const [admissionType, setAdmissionType] = React.useState("");
  const [admissionStatus, setAdmissionStatus] = React.useState({ value: "3", label: "Pending" });
  const [boardType, setBoardType] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [country, setCountry] = React.useState({ value: "1", label: "Pakistan" });
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="stacked-form">
              <Card.Header>
                <Card.Title as="h4">Admission and registration form for new and old students</Card.Title>
                <Card.Title as="h6" class="mt-3">Enrolment number : 2023575<br/>The year of joining : 2023</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form action="" className="form" method="">
                  <Card>
                    <Card.Header>
                      <Card.Header>
                        <Card.Title as="h4">Edit Profile</Card.Title>
                      </Card.Header>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                      <div className="author mb-3">
                        <img
                          alt="..."
                          className="avatar"
                          src={require("assets/img/default-avatar.png")}
                        ></img>
                      </div>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Student's name</label>
                            <Form.Control
                              // defaultValue="Mike"
                              // placeholder="Abdullah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Father's Name</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>required classes</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>The Father's Profession</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>date of birth</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Dependency</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Admission type</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Admission Status</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Type of board</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Gender</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Karachi"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>City</label>
                            <Form.Control
                              // placeholder="City name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Province</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Province name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Country</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Karachi"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Place of birth</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              // placeholder="Karachi"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>   
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Schooling Achievements (Modern)</label>
                            <Form.Control
                              // placeholder="Metric"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Grade obtained in the previous exam</label>
                            <Form.Control
                              // placeholder="330"
                              type="text"
                            ></Form.Control>                            
                          </Form.Group>
                        </Col>
                      </Row>     
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>The name of the university you attended in the last academic</label>
                            <Form.Control
                              // placeholder="Darul Uloom Karachi"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Year</label>
                            <Form.Control
                              // placeholder="2023"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>   
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Temporary address</label>
                            <Form.Control
                              // placeholder="Karachi"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>permanent address</label>
                            <Form.Control
                              // placeholder="house no 655 shamshi colony shah faisal karachi sindh pakistan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>  
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>ID card number</label>
                            <Form.Control
                              // placeholder="42401-88647551"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>First contact number</label>
                            <Form.Control
                              // placeholder="03212678963"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>   
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>The second contact number</label>
                            <Form.Control
                              // placeholder="03004936748"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Guardian’s name</label>
                            <Form.Control
                              // placeholder=""
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>     
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Guardian’s profession</label>
                            <Form.Control
                              // placeholder=""
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Type of relation with guardian</label>
                            <Form.Control
                              // placeholder=""
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>   
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>current address of the guardian</label>
                            <Form.Control
                              // placeholder="islamabad"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>guardian's first contact number</label>
                            <Form.Control
                              // placeholder="0321-6365956"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row> 
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>guardian's second contact number</label>
                            <Form.Control
                              // placeholder="0300-5869574"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>supervisor's opinion of the previous class</label>
                            <Form.Control
                              // placeholder="its was good"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>              
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Signature of the current class supervisor</label>
                            <Form.Control
                              // placeholder="Signature"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>  


                     <div className="clearfix"></div>
                    </Card.Body>
                  </Card>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Button className="btn-fill" type="submit" variant="info">
                  <span className="btn-label">
                  <i class="fas fa-print"></i>
                  </span>
                  &nbsp;Print
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PrintMaterial;
