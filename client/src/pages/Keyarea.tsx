import React from "react";

interface DashboardProps {
  // Define any props here
}

//dashboard component
const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="flex flex-wrap">
      {/* activities */}
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Activities</h2>
          <p className="text-gray-700">Content related to activities...</p>
        </div>
      </div>

      {/* indicators  */}
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Indicators</h2>
          <p className="text-gray-700">Content related to indicators...</p>
        </div>
      </div>

      {/* targets */}
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Targets</h2>
          <p className="text-gray-700">Content related to targets...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
