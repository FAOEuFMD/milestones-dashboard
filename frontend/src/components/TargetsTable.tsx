import { useEffect, useState } from "react";

interface TableData {
  key_area_id: string;
  indicator: string;
  target_description: string;
  result_to_date: string;
  program_target: string;
}

interface TargetsTableProps {
  dbQ: string; // Add dbQ to the props interface so we have defined it as a prop
}
//here we pass the dbQ so that Targets table so that the table makes the call with the name from the button. we have to specify the props in the <> after React.FC
const TargetsTable: React.FC<TargetsTableProps> = ({ dbQ }) => {
  const [data, setData] = useState<TableData[]>([]);

  const fetchData = async () => {
    try {
      console.log(`Fetching data from /targets/keyarea1/expectedresult/${dbQ}`);
      const response = await fetch(
        `http://localhost:5000/api/targets/keyarea1/expectedresult/${dbQ}`
      );
      const result = await response.json();
      // Transform data as needed
      const transformedData = result.map((item: any) => ({
        key_area_id: item.key_area_id,
        indicator: item.indicator,
        target_description: item.target_description || "",
        result_to_date: item.result_to_date || "",
        program_target: item.program_target || "",
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
              Target Description
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
              Result to Date
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
              Program Target
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
                {row.target_description}
              </td>
              <td className="py-2 px-4 border-b border-l border-r">
                {row.result_to_date}
              </td>
              <td className="py-2 px-4 border-b border-l border-r">
                {row.program_target}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TargetsTable;
