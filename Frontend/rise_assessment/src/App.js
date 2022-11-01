import "./App.css";
import CreateJob from "./components/createJobs/CreateJob";
import FilterJob from "./components/filterJobs/FilterJob";
import Job from "./components/jobs/Job";
import { useState, useEffect } from "react"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:8800/api";

function App() {

  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const getPriorities = async () => {
      let priority = await axios.get("");
      setPriorities(priority.data);
    };
    getPriorities();
  }, []);

  return (
    <div className="App">
      <div className="Header">
        KİŞİSEL İŞ TAKİP UYGULAMASI
        <hr />
      </div>
      <div className="Create-Job">
        <CreateJob priorities={priorities} />
      </div>
      <div className="Filter-Job">
        <FilterJob />
      </div>
      <div className="Job">
        <Job />
      </div>
    </div>
  );
}

export default App;
