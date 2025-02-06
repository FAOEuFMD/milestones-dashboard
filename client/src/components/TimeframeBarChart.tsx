import Plot from "react-plotly.js";
import { RowData } from "../types/interfaces";
import { countMet } from "../pages/KeyAreasFunctions";

// function to calculate number of met goals for each category
const findMetByTimeframe = (data: RowData[]) => {
    // group by timeframe
    const shortTermMet = countMet(data.filter((target) => target.target_timeframe === "Short-term goal"));
    const midTermMet = countMet(data.filter((target) => target.target_timeframe === "Mid-term goal"));
    const longTermMet = countMet(data.filter((target) => target.target_timeframe === "Long-term goal"));

    // count met and return as an object
    const timeframeMet = {
        "Short-term": shortTermMet,
        "Mid-term": midTermMet,
        "Long-term": longTermMet
    }
    // return our calculations as an object
    return timeframeMet;
};

const TimeframeBarChart: React.FC<{data: RowData[]}> = ({ data }) => {
    // Get the calculations
    const goalCounts = findMetByTimeframe(data);

    return (
        <Plot
            data={[
                {
                    type: "bar",
                    x: Object.values(goalCounts),
                    y: Object.keys(goalCounts),
                    orientation: "h",
                    marker: {
                        color: ["#018877", "#629978", "#28949C"]
                    },
                },
            ]}
            layout={{
                width: 300,
                height: 200,
                title: {
                    text: "Targets Met by Timeframe",
                    font: {
                        size: 18,
                        color: "black",
                        family: "Helvetica, Arial, sans-serif",
                    }
                },
                showlegend: false,
                xaxis: {
                    title: {
                        text: "Number of targets met",
                        font: {
                            family: "Helvetica, Arial, sans-serif",
                            color: "black",
                        },
                    },
                    dtick: 1,
                },       
                yaxis: {
                    tickfont: {
                        color: "black",
                        family: "Helvetica, Arial, sans-serif",
                    }
                },
                margin: {
                    t: 40, // Reduce top margin to bring the title closer to the chart
                    b: 30, // Set bottom margin if necessary (for axis labels)
                    l: 75, // Left margin for proper label spacing
                    r: 25, // Right margin for proper label spacing
                },
            }}
            config={{
                responsive: true,
                displayModeBar: false,
            }}
        />
    );
};

export default TimeframeBarChart;