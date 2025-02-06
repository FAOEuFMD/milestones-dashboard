import Plot from "react-plotly.js";
import { RowData } from "../types/interfaces";
import { countMet } from "../pages/KeyAreasFunctions";

// function to calculate met targets and percentage
const calculateCompletion = (data: RowData[]) => {
    const metCount = countMet(data);
    const total = data.length;
    const notMetCount = total - metCount;

    // included check if total is greater than 0 just in case there are no targets by chance
    const metPercentage = total > 0 ? ((metCount / total) * 100).toFixed(1) : 0;

    // return our calculations as an object
    return { metPercentage, metCount, notMetCount, total }
};

const MetDonut: React.FC<{data: RowData[]}> = ({ data }) => {
    // Get the calculations
    const { metPercentage, metCount, notMetCount, total } = calculateCompletion(data);

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
                        colors: ["#048B5D", "#9ea6a1"]
                    },
                },
            ]}
            layout={{
                width: 250,
                height: 250,
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
                    t: 20,
                    b: 20,
                    l: 20,
                    r: 20,
                }
            }}
            // Chart will resize dynamically
            config={{responsive: true}}
        />
    );
};

export default MetDonut;