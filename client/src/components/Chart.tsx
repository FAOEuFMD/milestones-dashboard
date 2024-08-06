import React from 'react'; 

//not sure about this one
interface SimpleBarChartProps {
  data: Array<{ label: string; value: number }>;
}

const SimpleBarChart: React.FC<SimpleBarChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      {data.map((item, index) => (
        <div key={index} className="chart-bar" style={{ height: `${item.value}%` }}>
          <span className="chart-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SimpleBarChart;
