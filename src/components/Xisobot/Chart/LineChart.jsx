import React from "react";
import { Container } from "./LineStyle";
import { Line } from "react-chartjs-2";

export const LineChart = () => {
  const data = {
    labels: [
      "Feb 13",
      "Feb 14",
      "Feb 15",
      "Feb 16",
      "Feb 17",
      "Feb 18",
      "Feb 19",
    ],
    datasets: [
      {
        label: "Xisobot fast food 2021",
        data: [3, 5, 2, 3, 5, 4, 3],
      },
    ],
  };
  return (
    <Container>
      <Line data={data} />
    </Container>
  );
};
export default LineChart;
