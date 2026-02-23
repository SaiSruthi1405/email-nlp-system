import { useEffect } from "react";
import api from "../services/api";

export default function Dashboard() {

  useEffect(() => {
    api.get("/").then(res => console.log(res.data));
  }, []);

  return (
    <div style={{background:"#111", color:"white", height:"100vh"}}>
      <h1>Dashboard</h1>
    </div>
  );
}