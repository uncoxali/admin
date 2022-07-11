import React from "react";
import ReactApexChart from "react-apexcharts";
import { Row } from "reactstrap";

interface Props {
  data?: any;
  title?: string;
}

const Spinearea = ({ data, title }: Props) => {
  const series = [
    {
      name: "Performance Fee",

      data: data.performance_fee.map((item: any) => item.value),
    },

    {
      name: "Service Fee",
      data: data?.service_fee?.map((item: any) => item.value),
    },

    {
      name: "Unpaid PF",
      data: data?.unpaid_performance_fee?.map((item: any) => item.value),
    },
  ];

  const options: Object = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    xaxis: {
      type: "datetime",

      categories: data?.new_users?.map((item: any) => item.date),
    },
    yaxis: [
      {
        title: {
          text: "count",
        },
      },
    ],
    grid: {
      borderColor: "#f1f1f1",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <>
      <Row className="d-flex align-items-center justify-content-center">
        <p>Daily New Data (Amount)</p>
      </Row>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="350"
      />
    </>
  );
};

export default Spinearea;
