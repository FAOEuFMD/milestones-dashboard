import Plot from "react-plotly.js";

interface ProgressChartProps {
    result_to_date: number;
    program_target: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ result_to_date, program_target }) => {
    // compute remaining target; make sure it's not negative or bar looks odd
    const remainingTarget = Math.max(program_target - result_to_date, 0);

    // bar color based on progress; default is grey
    let progressColor = "#9ea6a1B3";
    if (result_to_date >= program_target) progressColor = "#048B5D";
    else if (result_to_date > 0) progressColor = "#28949C"; 

    return (
        <Plot
            data={[
                {
                    type: "bar",
                    orientation: "h",
                    x: [result_to_date], // progress
                    y: [""], // empty label to align bars
                    name: "Current",
                    marker: {color: progressColor}
                },
                {
                    type: "bar",
                    orientation: "h",
                    x: [remainingTarget], // left to go
                    y: [""], // empty label to align bars
                    name: "Remaining",
                    marker: {color: "#9ea6a1B3"}
                },  
            ]}
            layout={{
                barmode: "stack",
                height: 20,
                width: 175,
                margin: { l: 5, r: 0, t: 10, b: 0 },
                showlegend: false,
                xaxis: { visible: false },
                yaxis: { visible: false },
            }}
            config={{ displayModeBar: false }}
        />
    );
}

export default ProgressChart;