import React from "react";
import { Link } from "react-router-dom";

const DummyPage: React.FC = () => {
  return (
    <div>
      <div className="pt-40 mt-40 text-4xl text-white">
        Focus 1, 2, 3 dummy landing page
      </div>

      <div className="pt-20 text-2xl text-green-100 hoverr">
        <Link to="/"> - back to Homepage </Link>
      </div>
    </div>
  );
};

export default DummyPage;
