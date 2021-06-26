import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Paper } from "@material-ui/core";
import DataBox from "./DataBox";
import "./css/dashboard.css";

export default function Dashboard() {
  const history = useHistory();

  useEffect(() => {
    !localStorage.getItem("user") && history.push("/login");
  }, []);

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <DataBox title="Total Uploaded Movies" count="24" color="#58D68D" />
          </div>
          <div className="col-md-3 col-sm-12">
            <DataBox title="Total Watched Movies" count="12" color="#3498DB" />
          </div>
          <div className="col-md-3 col-sm-12">
            <DataBox title="Total Uploaded Movies" count="17" color="#E74C3C" />
          </div>
          <div className="col-md-3 col-sm-12">
            <DataBox title="Total Uploaded Movies" count="32" color="#F7DC6F" />
          </div>
        </div>
      </div>
    </div>
  );
}
