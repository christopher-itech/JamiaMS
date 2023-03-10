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

function StudentsList() {
  const [requiredClass, setRequiredClass] = React.useState("");
  const [admissionStatus, setAdmissionStatus] = React.useState("");
  const [boardType, setBoardType] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [modalExamResult, setModalExamResult] = React.useState(false);
  const [modalBooks, setModalBooks] = React.useState(false);
  const [modalInventory, setModalInventory] = React.useState(false);
  const [modalIDCard, setModalIDCard] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="stacked-form">
              <Card.Header>
                <Card.Title as="h4">Students list</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form action="" className="form" method="">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col className="pr-1" md="3">
                          <Form.Group>
                            <label>Student's name</label>
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
                        <Col className="p1-1" md="3">
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
                        <Col className="pr-1" md="3">
                          <Form.Group>
                            <label>Class</label>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="requiredClass"
                              value={requiredClass}
                              onChange={(value) => setRequiredClass(value)}
                              options={[
                                // {
                                //   value: "",
                                //   label: "Single Option",
                                //   isDisabled: true,
                                // },
                                { value: "1", label: "Hifz" },
                                { value: "2", label: "1st grade" },
                                { value: "3", label: "2st grade" },
                                { value: "4", label: "3st grade" },
                                { value: "5", label: "4st grade" },
                              ]}
                              placeholder="Single Select"
                            />
                          </Form.Group>
                        </Col>
                        <Col className="p1-1" md="3">
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
                        <Col className="p1-1" md="3">
                          <Form.Group>
                            <label>Type of board</label>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="boardType"
                              value={boardType}
                              onChange={(value) => setBoardType(value)}
                              options={[
                                { value: "1", label: "Local" },
                                { value: "2", label: "Federal" },
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
                      <th className="text-right">class</th>
                      <th className="text-right">phone number</th>
                      <th className="text-right">ID number</th>
                      <th className="text-right">admission type</th>
                      <th className="text-right">type of board</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>Andrew Mike</td>
                      <td className="text-right">Male</td>
                      <td className="text-right">Pending</td>
                      <td className="text-right">1st grade</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="text-right">Local</td>
                      <td className="td-actions text-center">
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
                            <Tooltip id="tooltip-981231696">
                              Exam results
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalExamResult(!modalExamResult)}
                            variant="warning"
                          >
                            <i className="fas fa-star"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Books
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalBooks(!modalBooks)}
                            variant="info"
                          >
                            <i className="fas fa-book-open"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Inventory
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalInventory(!modalInventory)}
                            variant="success"
                          >
                            <i className="fas fa-certificate"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              ID card
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalIDCard(!modalIDCard)}
                            variant="dark"
                          >
                            <i className="far fa-address-card"></i>
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
                            onClick={() => setModal(!modal)}
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
                      <td className="text-right">1st grade</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="text-right">Local</td>
                      <td className="td-actions text-center">
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
                            <Tooltip id="tooltip-981231696">
                              Exam results
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalExamResult(!modalExamResult)}
                            variant="warning"
                          >
                            <i className="fas fa-star"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Books
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalBooks(!modalBooks)}
                            variant="info"
                          >
                            <i className="fas fa-book-open"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Inventory
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalInventory(!modalInventory)}
                            variant="success"
                          >
                            <i className="fas fa-certificate"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              ID card
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalIDCard(!modalIDCard)}
                            variant="dark"
                          >
                            <i className="far fa-address-card"></i>
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
                            onClick={() => setModal(!modal)}
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
                      <td className="text-right">1st grade</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="text-right">Local</td>
                      <td className="td-actions text-center">
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
                            <Tooltip id="tooltip-981231696">
                              Exam results
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalExamResult(!modalExamResult)}
                            variant="warning"
                          >
                            <i className="fas fa-star"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Books
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalBooks(!modalBooks)}
                            variant="info"
                          >
                            <i className="fas fa-book-open"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Inventory
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalInventory(!modalInventory)}
                            variant="success"
                          >
                            <i className="fas fa-certificate"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              ID card
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalIDCard(!modalIDCard)}
                            variant="dark"
                          >
                            <i className="far fa-address-card"></i>
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
                            onClick={() => setModal(!modal)}
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
                      <td className="text-right">1st grade</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="text-right">Local</td>
                      <td className="td-actions text-center">
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
                            <Tooltip id="tooltip-981231696">
                              Exam results
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalExamResult(!modalExamResult)}
                            variant="warning"
                          >
                            <i className="fas fa-star"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Books
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalBooks(!modalBooks)}
                            variant="info"
                          >
                            <i className="fas fa-book-open"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Inventory
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalInventory(!modalInventory)}
                            variant="success"
                          >
                            <i className="fas fa-certificate"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              ID card
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalIDCard(!modalIDCard)}
                            variant="dark"
                          >
                            <i className="far fa-address-card"></i>
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
                            onClick={() => setModal(!modal)}
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
                      <td className="text-right">1st grade</td>
                      <td className="text-right">1342135</td>
                      <td className="text-right">2245--533745</td>
                      <td className="text-right">New</td>
                      <td className="text-right">Local</td>
                      <td className="td-actions text-center">
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
                            <Tooltip id="tooltip-981231696">
                              Exam results
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalExamResult(!modalExamResult)}
                            variant="warning"
                          >
                            <i className="fas fa-star"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Books
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalBooks(!modalBooks)}
                            variant="info"
                          >
                            <i className="fas fa-book-open"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Inventory
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalInventory(!modalInventory)}
                            variant="success"
                          >
                            <i className="fas fa-certificate"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              ID card
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={() => setModalIDCard(!modalIDCard)}
                            variant="dark"
                          >
                            <i className="far fa-address-card"></i>
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
                            onClick={() => setModal(!modal)}
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
        {/* Exam result Modal */}
        <Modal
          className="modal-primary"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => {setModalExamResult(!modalExamResult)}}
          show={modalExamResult}
        >
          <Card className="stacked-form">
            <Card.Header>
              <Card.Title className="text-center" as="h5">Andrew Mike's exam results</Card.Title>
            </Card.Header>   
            <Card.Body>      
              <Table>
                <thead>
                  <tr>
                    <th className="text-center">Exam name</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Seat number</th>
                    <th className="text-center">Book1</th>
                    <th className="text-center">Book2</th>
                    <th className="text-center">Book3</th>
                    <th className="text-center">Book4</th>
                    <th className="text-center">Book5</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">Exam name 1</td>
                    <td className="text-center">2023-03-11</td>
                    <td className="text-center">3</td>
                    <td className="text-center">                          
                      91
                    </td>
                    <td className="text-center">                          
                      87
                    </td>
                    <td className="text-center">                          
                      90
                    </td>
                    <td className="text-center">                          
                      87
                    </td>
                    <td className="text-center">                          
                      95
                    </td>
                    <td className="text-center">                          
                      475
                    </td>
                    <td className="text-center">                          
                      A
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">Exam name 2</td>
                    <td className="text-center">2023-03-15</td>
                    <td className="text-center">15</td>
                    <td className="text-center">                          
                      91
                    </td>
                    <td className="text-center">                          
                      87
                    </td>
                    <td className="text-center">                          
                      90
                    </td>
                    <td className="text-center">                          
                      87
                    </td>
                    <td className="text-center">                          
                      95
                    </td>
                    <td className="text-center">                          
                      425
                    </td>
                    <td className="text-center">                          
                      B
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">Exam name 3</td>
                    <td className="text-center">2023-03-17</td>
                    <td className="text-center">11</td>
                    <td className="text-center">                          
                      91
                    </td>
                    <td className="text-center">                          
                      87
                    </td>
                    <td className="text-center">                          
                      90
                    </td>
                    <td className="text-center">                          
                      87
                    </td>
                    <td className="text-center">                          
                      95
                    </td>
                    <td className="text-center">                          
                      455
                    </td>
                    <td className="text-center">                          
                      A
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="modal-footer">
            <Button
              className="btn-simple mx-auto"
              onClick={() => {setModalExamResult(!modalExamResult)}}
              variant="link"
            >
              Close
            </Button>
          </div>
        </Modal>
        {/* End Modal */}   
        {/* Books Modal */}
        <Modal
          className="modal-primary"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => {setModalBooks(!modalBooks)}}
          show={modalBooks}
        >
          <Card className="stacked-form">
            <Card.Header>
              <Card.Title className="text-center" as="h5">Andrew Mike's books</Card.Title>
            </Card.Header>   
            <Card.Body>      
              <Table>
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Book name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">Javascript Programming Professonal Guide 1</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td className="text-center">Computer Network Security</td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td className="text-center">Data structure and algorithm</td>
                  </tr>

                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="modal-footer">
            <Button
              className="btn-simple mx-auto"
              onClick={() => {setModalBooks(!modalBooks)}}
              variant="link"
            >
              Close
            </Button>
          </div>
        </Modal>
        {/* End Modal */}   
        {/* Inventory Modal */}
        <Modal
          className="modal-primary"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => {setModalInventory(!modalInventory)}}
          show={modalInventory}
        >
          <Card className="stacked-form">
            <Card.Header>
              <Card.Title className="text-center" as="h5">Andrew Mike's inventory</Card.Title>
            </Card.Header>   
            <Card.Body>      
              <Table>
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Inventory title</th>
                    <th className="text-right">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">A way to speed up compilation of go code</td>
                    <td className="text-right">2023-02-05</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td className="text-center">AI slot machine</td>
                    <td className="text-right">2023-02-05</td>
                  </tr>
                 </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="modal-footer">
            <Button
              className="btn-simple mx-auto"
              onClick={() => {setModalInventory(!modalInventory)}}
              variant="link"
            >
              Close
            </Button>
          </div>
        </Modal>
        {/* End Modal */}   
        {/* ID card Modal */}
        <Modal
          className="modal-primary"
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => {setModalIDCard(!modalIDCard)}}
          show={modalIDCard}
        >
          <Card className="stacked-form">
            <Card.Header>
              <Card.Title className="text-center" as="h5">Andrew Mike's ID card</Card.Title>
            </Card.Header>   
            <Card.Body className="text-center">      
              <img
                alt="id card"
                src={require("assets/img/idcard.png")}
              ></img>
            </Card.Body>
          </Card>
          <div className="modal-footer">
            <Button
              className="btn-simple mx-auto"
              onClick={() => {setModalIDCard(!modalIDCard)}}
              variant="link"
            >
              Close
            </Button>
          </div>
        </Modal>
        {/* End Modal */}   
      </Container>
    </>
  );
}

export default StudentsList;
