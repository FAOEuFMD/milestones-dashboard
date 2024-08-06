import React from "react";
import Plot from "react-plotly.js";

const DummyFocus2: React.FC = () => {
  return (
    <div>
      <div className="h-screen bg-gradient-to-br from-green-600 to-green-800">
        <h1 className="text-4xl font-bold text-center dark:text-white">
          Secondary Focus Area
        </h1>
        <p className="text-2xl text-center dark:text-white">
          Dummy landing page2
        </p>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
        />
      </div>
    </div>
  );
};

export default DummyFocus2;
