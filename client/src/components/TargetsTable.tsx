import { useEffect, useState } from "react";

interface TableData {
  key_area_id: string;
  indicator: string;
  annual_target: string;
  q1_2024: string;
  q2_2024: string;
  q3_2024: string;
  q4_2024: string;
  targetDate: string;
  dbQ: string; //This is a abreviattion of dbQ which we pass as a prop in ExpectedResults to Targets table aka selectedName
}

//here we pass the dbQ so that Targets table so that the table makes the call with the name from the button
const TargetsTable: React.FC = ({ dbQ }) => {
  const [data, setData] = useState<TableData[]>([]);

  const fetchData = async () => {
    try {
      console.log(`Fetching data from /targets/KeyArea1/expectedresult/${dbQ}`);
      const response = await fetch(
        `http://localhost:5000/api/targets/KeyArea1/expectedresult/${dbQ}`
      );
      const result = await response.json();
      // Transform data as needed
      const transformedData = result.map((item: any) => ({
        // Typescript does not take type any -- Sophie help
        key_area_id: item.key_area_id,
        indicator: item.indicator,
        annual_target: item.annual_target,
        q1_2024: item.Q1 || "",
        q2_2024: item.Q2 || "",
        q3_2024: item.Q3 || "",
        q4_2024: item.Q4 || "",
        targetDate: item["Target Date"] || "",
      }));
      setData(transformedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="container mx-auto p-4" style={{ maxWidth: "1300px" }}>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th
              className="py-2 px-4 border-b border-l border-r"
              style={{
                width: "150px",
                textAlign: "center",
                backgroundImage: "linear-gradient(to bottom, #34C759, #2E865F)",
                backgroundClip: "padding-box",
                color: "white",
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
                color: "white",
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
              <td className="py-2 px-4 border-b border-l border-r">
                {row.q1_2024}
              </td>
              <td className="py-2 px-4 border-b border-l border-r">
                {row.q2_2024}
              </td>
              <td className="py-2 px-4 border-b border-l border-r">
                {row.q3_2024}
              </td>
              <td className="py-2 px-4 border-b border-l border-r">
                {row.q4_2024}
              </td>
              <td className="py-2 px-4 border-b border-l border-r">
                {row.targetDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TargetsTable;
