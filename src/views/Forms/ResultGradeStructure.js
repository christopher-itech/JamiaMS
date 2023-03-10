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

function ResultGradeStructure() {
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
                <Card.Title as="h4">Grade structure</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width">
                <Table>
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">Grade name</th>
                      <th className="text-center">Score range</th>
                      <th className="text-center">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td className="text-center">A</td>
                      <td className="text-center">80 ~ 100</td>
                      <td className="text-center">23%</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td className="text-center">B</td>
                      <td className="text-center">80 ~ 100</td>
                      <td className="text-center">23%</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td className="text-center">C</td>
                      <td className="text-center">80 ~ 100</td>
                      <td className="text-center">23%</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td className="text-center">D</td>
                      <td className="text-center">80 ~ 100</td>
                      <td className="text-center">23%</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td className="text-center">E</td>
                      <td className="text-center">80 ~ 100</td>
                      <td className="text-center">23%</td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td className="text-center">Failed</td>
                      <td className="text-center">80 ~ 100</td>
                      <td className="text-center">23%</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>              
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Grade growth history</Card.Title>
                <p className="card-category">8 years of graduation</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  data={{
                    labels: [
                      "2015",
                      "2016",
                      "2017",
                      "2018",
                      "2019",
                      "2020",
                      "2021",
                      "2022",
                      "2023",
                      ""
                    ],
                    series: [
                      [5, 7, 11, 12, 10, 15, 12, 17, 21],
                      [20, 23, 25, 22, 24, 27, 27, 22, 29],
                      [50, 45, 52, 51, 55, 47, 49, 52, 55],
                      [30, 22, 25, 27, 23, 25, 29, 32, 27],
                      [9, 10, 9, 7, 8, 11, 10, 9, 7],
                      [3, 2, 2, 1, 3, 2, 2, 1, 1],
                    ]
                  }}
                  type="Line"
                  options={{
                    low: 0,
                    high: 100,
                    showArea: false,
                    height: "250px",
                    axisX: {
                      showGrid: true
                    },
                    lineSmooth: true,
                    showLine: true,
                    showPoint: true,
                    fullWidth: true,
                    chartPadding: {
                      right: 50
                    }
                  }}
                  responsiveOptions={[
                    [
                      "screen and (max-width: 640px)",
                      {
                        axisX: {
                          labelInterpolationFnc: function (value) {
                            return value[0];
                          }
                        }
                      }
                    ]
                  ]}
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle mr-1 text-success"></i>A&nbsp;&nbsp;
                  <i className="fas fa-circle mr-1 text-info"></i>B&nbsp;&nbsp;
                  <i className="fas fa-circle mr-1 text-warning"></i>C&nbsp;&nbsp;
                  <i className="fas fa-circle mr-1 text-danger"></i>D&nbsp;&nbsp;
                  <i className="fas fa-circle mr-1 text-secondary"></i>E&nbsp;&nbsp;
                  <i className="fas fa-circle mr-1 text-dark"></i>Failed
                </div>
                {/* <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div> */}
              </Card.Footer>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default ResultGradeStructure;
