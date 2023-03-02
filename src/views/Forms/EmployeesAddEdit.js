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

function EmployeesAddEdit() {
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
                <Card.Title as="h4">Admission and registration form for new and old employees</Card.Title>
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
                            <label>Employee's name</label>
                            <Form.Control
                              // defaultValue="Mike"
                              placeholder="Abdullah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Father's Name</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              placeholder="Moti Allah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pl-r" md="6">
                          <Form.Group>
                            <label>Qualification</label>
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
                            <ReactDatetime
                              inputProps={{
                                className: "form-control",
                                placeholder: "Date Picker",
                              }}
                              timeFormat={false}
                            ></ReactDatetime>
                          </Form.Group>
                        </Col>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Dependency</label>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="dependency"
                              value={dependency}
                              onChange={(value) => setDependency(value)}
                              defaultValue={{ value: "1", label: "School" }}
                              options={[
                                // {
                                //   value: "",
                                //   label: "Single Option",
                                //   isDisabled: true,
                                // },
                                { value: "1", label: "School" },
                                { value: "2", label: "Self" },
                              ]}
                              placeholder="Single Select"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Admission type</label>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="admissionType"
                              value={admissionType}
                              onChange={(value) => setAdmissionType(value)}
                              options={[
                                { value: "1", label: "New" },
                                { value: "2", label: "Renewal" },
                              ]}
                              placeholder="Single Select"
                            />
                          </Form.Group>
                        </Col>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Admission Status</label>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="admissionStatus"
                              value={admissionStatus}
                              onChange={(value) => setAdmissionStatus(value)}
                              defaultValue={{ value: "3", label: "Pending" }}
                              options={[
                                 { value: "1", label: "Active" },
                                { value: "2", label: "Inactive" },
                                { value: "3", label: "Pending" },
                              ]}
                              placeholder="Single Select"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Gender</label>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="gender"
                              value={gender}
                              onChange={(value) => setGender(value)}
                              defaultValue={{ value: "3", label: "Pending" }}
                              options={[
                                 { value: "1", label: "Male" },
                                { value: "2", label: "Female" },
                              ]}
                              placeholder="Single Select"
                            />
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>City</label>
                            <Form.Control
                              placeholder="City name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>                        
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Province</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              placeholder="Province name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="p1-1" md="6">
                          <Form.Group>
                            <label>Country</label>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="country"
                              value={country}
                              onChange={(value) => setCountry(value)}
                              defaultValue={{ value: "1", label: "Pakistan" }}
                              options={[
                                 { value: "1", label: "Pakistan" },
                                { value: "2", label: "China" },
                                { value: "3", label: "India" },
                                { value: "4", label: "Indonesia" },
                                { value: "5", label: "Bangladesh" },
                                { value: "6", label: "Japan" },
                                { value: "7", label: "Philippines" },
                                { value: "8", label: "Vietnam" },
                                { value: "9", label: "Turkey" },
                                { value: "10", label: "Thailand" },
                                { value: "11", label: "Myanmar" },
                              ]}
                              placeholder="Single Select"
                            />
                          </Form.Group>
                        </Col>                        
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Place of birth</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              placeholder="Karachi"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Grade obtained in the previous exam</label>
                            <Form.Control
                              placeholder="330"
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
                              placeholder="Karachi"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>permanent address</label>
                            <Form.Control
                              placeholder="house no 655 shamshi colony shah faisal karachi sindh pakistan"
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
                              placeholder="42401-88647551"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>First contact number</label>
                            <Form.Control
                              placeholder="03212678963"
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
                              placeholder="03004936748"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Guaranteer name</label>
                            <Form.Control
                              placeholder=""
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>     
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Guaranteer's profession</label>
                            <Form.Control
                              placeholder=""
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Type of relation with guardian</label>
                            <Form.Control
                              placeholder=""
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
                              placeholder="islamabad"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>guardian's first contact number</label>
                            <Form.Control
                              placeholder="0321-6365956"
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
                              placeholder="0300-5869574"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>supervisor's opinion of the previous class</label>
                            <Form.Control
                              placeholder="its was good"
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
                              placeholder="Signature"
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

export default EmployeesAddEdit;
