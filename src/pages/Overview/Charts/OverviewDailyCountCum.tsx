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
      name: "Users",
      data: data.new_users.map((item: any) => item.cumulative_value),
    },
    {
      name: "Exchange Accounts",

      data: data.exchange_accounts.map((item: any) => item.cumulative_value),
    },

    {
      name: "New Sub",
      data: data?.new_sub?.map((item: any) => item.cumulative_value),
    },
    {
      name: "Cancel Sub",
      data: data?.cancel_sub?.map((item: any) => item.cumulative_value),
    },
    {
      name: "Expire Sub",
      data: data?.expire_sub?.map((item: any) => item.cumulative_value),
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
        <p>Daily Cumulative Data (Count)</p>
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
