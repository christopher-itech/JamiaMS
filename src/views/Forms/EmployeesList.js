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
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

function EmployeesList() {
  const [requiredClass, setRequiredClass] = React.useState("");
  const [admissionStatus, setAdmissionStatus] = React.useState("");
  const [boardType, setBoardType] = React.useState("");
  const [gender, setGender] = React.useState("");
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="stacked-form">
              <Card.Header>
                <Card.Title as="h4">Employee list</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form action="" className="form" method="">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col className="pr-1" md="3">
                          <Form.Group>
                            <label>Employee's name</label>
                            <Form.Control
                              // defaultValue="Mike"
                              placeholder="Abdullah Jan"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="3">
                          <Form.Group>
                            <label>Phone number</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              placeholder=""
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="3">
                          <Form.Group>
                            <label>ID Card Number</label>
                            <Form.Control
                              // defaultValue="Mike"
                              placeholder=""
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="3">
                          <Form.Group>
                            <label>CNIC number</label>
                            <Form.Control
                              // defaultValue="Andrew"
                              placeholder=""
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
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
                        <Col className="p1-1" md="6">
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
                      </Row>
                     <div className="clearfix"></div>
                    </Card.Body>
                  </Card>
                </Form>
              </Card.Body>
              <Card.Body className="table-full-width">
                <Table>
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Name</th>
                      <th className="text-right">Gender</th>
                      <th className="text-right">admission status</th>
                      <th className="text-right">phone number</th>
                      <th className="text-right">ID number</th>
                      <th className="text-right">admission type</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>Andrew Mike</td>
                      <td className="text-right">Male</td>
                      <td className="text-right">Pending</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="td-actions text-center">
                        {/* <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-48903503">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger> */}
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit Profile..
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
                      <td>Andrew Mike</td>
                      <td className="text-right">Male</td>
                      <td className="text-right">Pending</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="td-actions text-center">
                        {/* <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-48903503">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger> */}
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit Profile..
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
                      <td>Andrew Mike</td>
                      <td className="text-right">Male</td>
                      <td className="text-right">Pending</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="td-actions text-center">
                        {/* <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-48903503">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger> */}
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit Profile..
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
                      <td>Andrew Mike</td>
                      <td className="text-right">Male</td>
                      <td className="text-right">Pending</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="td-actions text-center">
                        {/* <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-48903503">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger> */}
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit Profile..
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
                      <td>Andrew Mike</td>
                      <td className="text-right">Male</td>
                      <td className="text-right">Pending</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="td-actions text-center">
                        {/* <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-48903503">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger> */}
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit Profile..
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

export default EmployeesList;
