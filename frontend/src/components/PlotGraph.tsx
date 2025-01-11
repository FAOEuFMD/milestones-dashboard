import React from "react";
import Plot from "react-plotly.js";

const PlotGraph: React.FC = () => {
  return (
    <div>
      <div className="h-screen">
        <h1 className="text-4xl font-bold text-center dark:text-teal-800 pt-10">
          Imagine a table
        </h1>

        <Plot
          className="plot py-8 px-8"
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "#048B5D" },
              line: {color: "#2B9866"}
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3],
              marker: {color: "#018877"}
             },
          ]}
          layout={{
            width: 700,
            height: 500,
            title: "A Fancy Plot",
            //This changes the color ih the graph background
            plot_bgcolor: "#0000",
            //This changes the color of the paper
            paper_bgcolor: "#0000",
          }}
        />
      </div>
    </div>
  );
};

export default PlotGraph;
