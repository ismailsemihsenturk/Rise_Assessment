import "./App.css";
import CreateJob from "./components/createJobs/CreateJob";
import FilterJob from "./components/filterJobs/FilterJob";
import Job from "./components/jobs/Job";
import { useState, useEffect } from "react"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:8800/api";

function App() {

  const [priorities, setPriorities] = useState([]);
  const [job, setJob] = useState([]);

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
        <CreateJob priorities={priorities} job={job} setJob={setJob} />
      </div>
      <div className="Filter-Job">
        <FilterJob priorities={priorities} />
      </div>
      <div className="Job">
        <Job job={job} />
      </div>
    </div>
  );
}

export default App;
