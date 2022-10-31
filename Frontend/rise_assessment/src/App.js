import "./App.css";
import CreateJob from "./components/createJobs/CreateJob";
import FilterJob from "./components/filterJobs/FilterJob";
import Job from "./components/jobs/Job";
import { useState, useEffect } from "react"
import axios from "axios"
axios.defaults.baseURL ="http://localhost:8800/api";

function App() {

  const [priorities, setPriorities] = useState({});

  useEffect(() => {
    const getPriorities = async () => {
      let priority = await axios.get("");
      console.log(priority.data)
      setPriorities(priority.data);
    };
    getPriorities();
  }, []);

  return (
    <div className="App">
      {priorities.Trivial + " Kişisel iş takip uygulaması"}
      <CreateJob/>
      <FilterJob/>
      <Job/>
    </div>
  );
}

export default App;
