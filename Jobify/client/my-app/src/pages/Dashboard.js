import React from "react";
import { useEffect } from "react";
import DashboardFormPage from "../assets/wrappers/DashboardFormPage";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  return (
    <DashboardFormPage>
      <h1>DashBoard</h1>
    </DashboardFormPage>
  );
};

export default Dashboard;
