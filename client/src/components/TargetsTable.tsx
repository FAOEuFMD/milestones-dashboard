import { useEffect, useState } from "react";

interface TableData {
  indicator: string;
  annualProgramTarget: string;
  q1_2024: string;
  q2_2024: string;
  q3_2024: string;
  q4_2024: string;
  targetDate: string;
}

const TargetsTable: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from /targets");
        const response = await fetch("http://localhost:5000/api/targets");
        const result = await response.json();
        // Transform data as needed
        const transformedData = result.map((item: any) => ({
          indicator: item.Indicator,
          annualProgramTarget: item.Annual_target,
          q1_2024: item.Q1 || '',
          q2_2024: item.Q2 || '',
          q3_2024: item.Q3 || '',
          q4_2024: item.Q4 || '',
          targetDate: item["Target Date"] || ''
        }));
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div 
    className="container mx-auto p-4"
    style={{ maxWidth: "1300px" }}
  >
    <table
      className="min-w-full bg-white border border-gray-200"
    >
      <thead>
        <tr>
          <th
            className="py-2 px-4 border-b border-l border-r"
            style={{
              width: "150px",
              textAlign: "center",
              backgroundImage: "linear-gradient(to bottom, #34C759, #2E865F)",
              backgroundClip: "padding-box",
              color: "white"
            }}
          >
            Indicator
          </th>
          <th
            className="py-2 px-4 border-b border-l border-r"
            style={{
              width: "200px",
              textAlign: "center",
              backgroundImage: "linear-gradient(to bottom, #34C759, #2E865F)",
              backgroundClip: "padding-box",
              color: "white"
            }}
          >
            Annual Program Target
          </th>
          <th
            className="py-2 px-4 border-b border-l border-r"
            style={{
              width: "100px",
              backgroundImage: "linear-gradient(to bottom, #34C759, #2E865F)",
              backgroundClip: "padding-box",
              color: "white"
            }}
          >
            Q1 2024
          </th>
          <th
            className="py-2 px-4 border-b border-l border-r"
            style={{
              width: "100px",
              backgroundImage: "linear-gradient(to bottom, #34C759, #2E865F)",
              backgroundClip: "padding-box",
              color: "white"
            }}
          >
            Q2 2024
          </th>
          <th
            className="py-2 px-4 border-b border-l border-r"
            style={{
              width: "100px",
              backgroundImage: "linear-gradient(to bottom, #34C759, #2E865F)",
              backgroundClip: "padding-box",
              color: "white"
            }}
          >
            Q3 2024
          </th>
          <th
            className="py-2 px-4 border-b border-l border-r"
            style={{
              width: "100px",
              backgroundImage: "linear-gradient(to bottom, #34C759, #2E865F)",
              backgroundClip: "padding-box",
              color: "white"
            }}
          >
            Q4 2024
          </th>
          <th
            className="py-2 px-4 border-b border-l border-r"
            style={{
              width: "100px",
              backgroundImage: "linear-gradient(to bottom, #34C759, #2E865F)",
              backgroundClip: "padding-box",
              color: "white"
            }}
          >
            Target Date
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td
              className="py-2 px-4 border-b border-l border-r"
              style={{ textAlign: "left" }}
            >
              {row.indicator}
            </td>
            <td
              className="py-2 px-4 border-b border-l border-r"
              style={{ textAlign: "left" }}
            >
              {row.annualProgramTarget}
            </td>
            <td
              className="py-2 px-4 border-b border-l border-r"
            >
              {row.q1_2024}
            </td>
            <td
              className="py-2 px-4 border-b border-l border-r"
            >
              {row.q2_2024}
            </td>
            <td
              className="py-2 px-4 border-b border-l border-r"
            >
              {row.q3_2024}
            </td>
            <td
              className="py-2 px-4 border-b border-l border-r"
            >
              {row.q4_2024}
            </td>
            <td
              className="py-2 px-4 border-b border-l border-r"
            >
              {row.targetDate}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}
export default TargetsTable;