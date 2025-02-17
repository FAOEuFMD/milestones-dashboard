import Plot from "react-plotly.js";
import { RowData } from "../types/interfaces";
import { countMet } from "../pages/KeyAreasFunctions";
import React, { useEffect, useState } from 'react';

// function to calculate met targets and percentage
const calculateCompletion = (data: RowData[]) => {
    const metCount = countMet(data);
    const total = data.length;
    const notMetCount = total - metCount;

    // return our calculations as an object
    return { metCount, notMetCount, total }
};

const MetDonut: React.FC<{data: RowData[]}> = ({ data }) => {
    // state for plotly for dynamic import
    const [Plotly, setPlotly] = useState<any>(null);

    // useEffect to only load plotly when needed
    useEffect(() => {
        const loadPlotly = async () => {
          const PlotlyModule = await import('plotly.js-basic-dist');
          setPlotly(PlotlyModule); // Store the loaded Plotly module
        };
    
        loadPlotly();
    }, []);

    // Get the calculations
    const { metCount, notMetCount, total } = calculateCompletion(data);

    // If Plotly is not loaded yet, show a loading message
    if (!Plotly) {
        return <div>Loading chart...</div>; // You can replace this with a spinner or other loading indicator
    }

    return (
        <Plot
            data={[
                {
                    type: "pie",
                    labels: ["Met Targets", "Unmet Targets"],
                    values: [metCount, notMetCount],
                    // Donut effect
                    hole: 0.7,
                    // Hide default percentages
                    textinfo: "none",
                    marker: {
                        colors: ["#048B5D", "#9ea6a1B3"]
                    },
                },
            ]}
            layout={{
                width: 200,
                height: 200,
                title: "",
                showlegend: false,
                // For adding text to the chart
                annotations: [
                    {
                        x: 0.5,
                        y: 0.5,
                        xref: "paper",
                        yref: "paper",
                        text: `${metCount} of ${total}<br>targets met`,
                        showarrow: false,
                        font: {
                            size: 18,
                            color: "#000000",
                            family: "Helvetica, Arial, sans-serif",
                        },
                    },
                ],
                margin: {
                    t: 0,
                    b: 0,
                    l: 0,
                    r: 0,
                },
            }}
            config={{
                responsive: true,
                displayModeBar: false,
            }}
        />
    );
};

export default MetDonut;