import React from "react";
import MetaTags from "react-meta-tags";

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex";
import DashedLine from "../AllCharts/apex/dashedLine";
import SplineArea from "../AllCharts/apex/SplineArea";
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import BarChart from "../AllCharts/apex/barchart";
import LineColumnArea from "../AllCharts/apex/LineColumnArea";
import PieChart from "../AllCharts/apex/PieChart";
import DonutChart from "../AllCharts/apex/dountchart";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Container,
} from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Apexchart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Apex Charts | Finestel - React Admin & Overview Template
          </title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Charts" breadcrumbItem="Apex Charts" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Line with Data Labels</CardTitle>
                </CardHeader>
                <CardBody>
                  <LineApexChart />
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Dashed Line</CardTitle>
                </CardHeader>
                <CardBody>
                  <DashedLine />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Spline Area </CardTitle>
                </CardHeader>
                <CardBody>
                  <SplineArea />
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Column Chart </CardTitle>
                </CardHeader>
                <CardBody>
                  <Apaexlinecolumn />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Column with Data Labels </CardTitle>
                </CardHeader>
                <CardBody>
                  <ColumnWithDataLabels />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Bar Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <BarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Line, Column & Area Chart </CardTitle>
                </CardHeader>
                <CardBody>
                  <LineColumnArea />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Pie Chart </CardTitle>
                </CardHeader>
                <CardBody>
                  <PieChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <CardTitle>Donut Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <DonutChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Apexchart;
