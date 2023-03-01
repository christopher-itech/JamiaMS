import React from "react";
// react component used to create charts
import ChartistGraph from "react-chartist";
// react components used to create a SVG / Vector map
import { VectorMap } from "react-jvectormap";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  OverlayTrigger,
  Table,
  Tooltip,
  Container,
  Row,
  Col
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
      <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">States</Card.Title>
                <p className="card-category">All students, tutors and employees</p>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md="6">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th className="text-right">Total Number</th>
                          <th className="text-right">Actived</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/US.png")}
                              ></img>
                            </div>
                          </td> */}
                          <td>Resident students</td>
                          <td className="text-right">2.920</td>
                          <td className="text-right">2.920</td>
                        </tr>
                        <tr>
                          {/* <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/DE.png")}
                              ></img>
                            </div>
                          </td> */}
                          <td>Nonresident students</td>
                          <td className="text-right">1.300</td>
                          <td className="text-right">1.300</td>
                        </tr>
                        <tr>
                          {/* <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/AU.png")}
                              ></img>
                            </div>
                          </td> */}
                          <td>Dares-nizami students</td>
                          <td className="text-right">760</td>
                          <td className="text-right">760</td>
                        </tr>
                        <tr>
                          {/* <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/GB.png")}
                              ></img>
                            </div>
                          </td> */}
                          <td>Hafiz students</td>
                          <td className="text-right">690</td>
                          <td className="text-right">690</td>
                        </tr>
                        <tr>
                          {/* <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/RO.png")}
                              ></img>
                            </div>
                          </td> */}
                          <td>Male students</td>
                          <td className="text-right">600</td>
                          <td className="text-right">600</td>
                        </tr>
                        <tr>
                          {/* <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td> */}
                          <td>Female students</td>
                          <td className="text-right">550</td>
                          <td className="text-right">550</td>
                        </tr>
                        <tr>
                          {/* <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td> */}
                          <td>Total employees</td>
                          <td className="text-right">550</td>
                          <td className="text-right">550</td>
                        </tr>
                        <tr>
                          {/* <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/flags/BR.png")}
                              ></img>
                            </div>
                          </td> */}
                          <td>Total tutors</td>
                          <td className="text-right">550</td>
                          <td className="text-right">550</td>
                        </tr>                                                
                      </tbody>
                    </Table>
                  </Col>
                  <Col className="ml-auto mr-auto" md="6">
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent"
                      zoomOnScroll={false}
                      containerStyle={{
                        width: "100%",
                        height: "300px"
                      }}
                      containerClassName="map"
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 0,
                          "stroke-opacity": 0
                        }
                      }}
                      series={{
                        regions: [
                          {
                            values: {
                              AU: 760,
                              BR: 550,
                              CA: 120,
                              DE: 1300,
                              FR: 540,
                              GB: 690,
                              GE: 200,
                              IN: 200,
                              RO: 600,
                              RU: 300,
                              US: 2920
                            },
                            scale: ["#AAAAAA", "#444444"],
                            normalizeFunction: "polynomial"
                          }
                        ]
                      }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>  
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-badge text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Resident Students</p>
                      <Card.Title as="h4">1,500</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-user mr-1"></i>
                  78.6% of total students
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-badge text-secondary"></i>
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Nonresident students</p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-user mr-1"></i>
                  52.1% of total students
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-explore-2 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Dares-nizami students</p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-user mr-1"></i>
                  50.5% of total students
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-explore-2 text-secondary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Hafiz students</p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-user mr-1"></i>
                  40.7% of total students
                </div>
              </Card.Footer>
            </Card>
          </Col>   
        </Row>              
        <Row>
        <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-single-02 text-secondary"></i> */}
                      <i className="fa fa-user text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Male Students</p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-user mr-1"></i>
                  69.8% of total students 
                </div>
              </Card.Footer>
            </Card>
          </Col> 
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-single-02 text-secondary"></i> */}
                      <i className="fas fa-user-md text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Female students</p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-user mr-1"></i>
                  30.2% of total students
                </div>
              </Card.Footer>
            </Card>
          </Col>  
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-single-02 text-success"></i> */}
                      <i className="fas fa-user-edit text-warning"></i>                      
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total tutors</p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-user mr-1"></i>
                  Male: 1000, Female: 345
                </div>
              </Card.Footer>
            </Card>
          </Col>   
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-single-02 text-secondary"></i> */}
                     <i className="fas fa-user-secret text-secondary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total employees</p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-user mr-1"></i>
                  Male: 1000, Female: 345
                </div>
              </Card.Footer>
            </Card>
          </Col>    
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Univ Growth</Card.Title>
                <p className="card-category">8 years history</p>
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
                      [2870, 3805, 4900, 4920, 5054, 5806, 6098, 6095, 6030],
                      [670, 1520, 1430, 2400, 2087, 3035, 4350, 4037, 4700],
                      [230, 1130, 670, 1008, 1900, 2039, 3070, 3008, 4300]
                    ]
                  }}
                  type="Line"
                  options={{
                    low: 0,
                    high: 8000,
                    showArea: false,
                    height: "245px",
                    axisX: {
                      showGrid: false
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
                  <i className="fas fa-circle mr-1 text-info"></i>
                  Students <i className="fas fa-circle mr-1 text-danger"></i>
                  Tutors <i className="fas fa-circle mr-1 text-warning"></i>
                  Employees
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
        {/* <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">2017 Sales</Card.Title>
                <p className="card-category">All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "Mai",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec"
                    ],
                    series: [
                      [
                        542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756,
                        895
                      ],
                      [
                        412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636,
                        695
                      ]
                    ]
                  }}
                  type="Bar"
                  options={{
                    seriesBarDistance: 10,
                    axisX: {
                      showGrid: false
                    },
                    height: "245px"
                  }}
                  responsiveOptions={[
                    [
                      "screen and (max-width: 640px)",
                      {
                        seriesBarDistance: 5,
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
                  <i className="fas fa-circle mr-1 text-info"></i>
                  Tesla Model S{" "}
                  <i className="fas fa-circle mr-1 text-danger"></i>
                  BMW 5 Series
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className="card-category">Backend development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-688296980">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-202192706">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-746544352">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-743037005">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-855684210">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-242945902">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Create 4 Invisible User Experiences you Never Knew
                          About
                        </td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488557184">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-789597281">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Read "Following makes Medium better"</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-521344137">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-934093947">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Unfollow 5 enemies from twitter</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-97404283">
                                Edit Task..
                              </Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-888894273">Remove..</Tooltip>
                            }
                            placement="top"
                          >
                            <Button
                              className="btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Dashboard;
