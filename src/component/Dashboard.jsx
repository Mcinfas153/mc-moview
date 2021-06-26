import React, { useEffect } from "react";
import { useHistory } from "react-router";

export default function Dashboard() {
  const history = useHistory();

  useEffect(() => {
    !localStorage.getItem("user") && history.push("/login");
  }, []);

  return (
    <div className="dashboard">
      <h1>This is Dashboard</h1>
    </div>
  );
}
