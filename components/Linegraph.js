"use client";
import React, { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Linegraph = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useLayoutEffect(() => {
    const generateChart = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the previous chart instance
      }

      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    generateChart();

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  // Update height after component is mounted
  useLayoutEffect(() => {
    if (chartContainer.current) {
      const height = chartContainer.current.clientHeight * 2;
      chartContainer.current.height = height;
      chartInstance.current.resize(); // Resize the chart to fit the new height
    }
  }, []);

  return <canvas ref={chartContainer} />;
};

export default Linegraph;
