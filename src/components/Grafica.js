import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Grafica = ({ data }) => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        // display: true,
        // text: "Chart.js Line Chart",
      },
    },
  };

  useEffect(() => {
    const labels = [];
    const values = [];
    data.forEach((item) => {
      const { date, high } = item;
      let month = handleSearchMonth(date.substring(7, 5));
      let day = date.substring(10, 8);
      labels.push(`${month}-${day}`);
      values.push(high);
    });

    setLabels(labels);
    setValues(values);
  }, [data]);

  const handleSearchMonth = (month) => {
    let monthName = "";
    if (month === "01") {
      monthName = "Ene";
    } else if (month === "02") {
      monthName = "Feb";
    } else if (month === "03") {
      monthName = "Mar";
    } else if (month === "04") {
      monthName = "Abr";
    } else if (month === "05") {
      monthName = "May";
    } else if (month === "06") {
      monthName = "Jun";
    } else if (month === "07") {
      monthName = "Jul";
    } else if (month === "08") {
      monthName = "Ago";
    } else if (month === "09") {
      monthName = "Sep";
    } else if (month === "10") {
      monthName = "Oct";
    } else if (month === "11") {
      monthName = "Nov";
    } else if (month === "12") {
      monthName = "Dic";
    }

    return monthName;
  };

  const datas = {
    labels,
    datasets: [
      {
        label: data[0].symbol,
        data: values,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={datas} />;
};
