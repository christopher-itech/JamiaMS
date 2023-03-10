import React from "react";
import Select from "react-select";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import ChartistGraph from "react-chartist";


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

function ResultList() {
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
                <Card.Title as="h4">Result list</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width">
                <Table>
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">Main exam name</th>
                      <th className="text-center">Class</th>
                      <th className="text-center">Exam date</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td className="text-center">Exam name 1</td>
                      <td className="text-center">Class 1</td>
                      <td className="text-center">2023-03-11</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td className="text-center">Exam name 1</td>
                      <td className="text-center">Class 2</td>
                      <td className="text-center">2023-03-11</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td className="text-center">Exam name 1</td>
                      <td className="text-center">Class 3</td>
                      <td className="text-center">2023-03-11</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td className="text-center">Exam name 2</td>
                      <td className="text-center">Class 1</td>
                      <td className="text-center">2023-03-15</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td className="text-center">Exam name 2</td>
                      <td className="text-center">Class 2</td>
                      <td className="text-center">2023-03-15</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td className="text-center">Exam name 2</td>
                      <td className="text-center">Class 3</td>
                      <td className="text-center">2023-03-15</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">7</td>
                      <td className="text-center">Exam name 3</td>
                      <td className="text-center">Class 1</td>
                      <td className="text-center">2023-03-17</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">8</td>
                      <td className="text-center">Exam name 3</td>
                      <td className="text-center">Class 2</td>
                      <td className="text-center">2023-03-17</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">9</td>
                      <td className="text-center">Exam name 3</td>
                      <td className="text-center">Class 3</td>
                      <td className="text-center">2023-03-17</td>
                      <td className="td-actions text-center">
                        <Button className="btn-outline" size="sm" variant="success">
                          View
                        </Button>
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

export default ResultList;
