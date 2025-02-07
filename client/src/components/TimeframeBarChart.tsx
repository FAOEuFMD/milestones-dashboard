import Plot from "react-plotly.js";
import { RowData } from "../types/interfaces";
import { countMet } from "../pages/KeyAreasFunctions";

// function to calculate number of met goals for each category
const findMetByTimeframe = (data: RowData[]) => {
    // group by timeframe
    const shortTerm = data.filter((target) => target.target_timeframe === "Short-term goal");
    const midTerm = data.filter((target) => target.target_timeframe === "Mid-term goal");
    const longTerm = data.filter((target) => target.target_timeframe === "Long-term goal");

    // count met and return as an object
    const timeframeCounts = {
        shortTermMet: countMet(shortTerm),
        midTermMet: countMet(midTerm),
        longtermMet: countMet(longTerm),
        shortTermUnmet: shortTerm.length - countMet(shortTerm),
        midTermUnmet: midTerm.length - countMet(midTerm),
        longTermUnmet: longTerm.length - countMet(longTerm)
    }

    // return our calculations
    return timeframeCounts;
};

const TimeframeBarChart: React.FC<{data: RowData[]}> = ({ data }) => {
    // Get the calculations
    const { shortTermMet, midTermMet, longtermMet, shortTermUnmet, midTermUnmet, longTermUnmet } = findMetByTimeframe(data);

    return (
        <Plot
            data={[
                // Met goals
                {
                    type: "bar",
                    x: [shortTermMet, midTermMet, longtermMet],
                    y: ["Short-term", "Mid-term", "Long-term"],
                    orientation: "h",
                    name: "Met Goals",
                    marker: {
                        color: "#048B5D"
                    },
                },
                // Unmet goals
                {
                    type:"bar",
                    x: [shortTermUnmet, midTermUnmet, longTermUnmet],
                    y: ["Short-term", "Mid-term", "Long-term"],
                    name: "Unmet Goals",
                    orientation: "h",
                    marker: {color: "#9ea6a1"}
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
                barmode: "stack",
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
                    tickfont: {
                        size: 8,
                    }
                },       
                yaxis: {
                    tickfont: {
                        color: "black",
                        family: "Helvetica, Arial, sans-serif",
                    },
                },
                margin: {
                    t: 40, // Reduce top margin to bring the title closer to the chart
                    b: 40, // Set bottom margin if necessary (for axis labels)
                    l: 75, // Left margin for proper label spacing
                    r: 15, // Right margin for proper label spacing
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