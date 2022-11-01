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
  const [filterJob, setFilterJob] = useState("");
  const [filterPriority, setFilterPriority] = useState("default");

  useEffect(() => {
    const getPriorities = async () => {
      let priority = await axios.get("");
      setPriorities(priority.data);
    };
    getPriorities();

    if (localStorage.getItem("data") !== null) {
      let data = JSON.parse(localStorage.getItem("data"));
      setJob(data)
    }

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
        <FilterJob priorities={priorities} setFilterJob={setFilterJob} setFilterPriority={setFilterPriority} />
      </div>
      <div className="Job">
        <div className="Job-List">

        
          <div className="Job-List-Name Title-Font">JOB NAME</div>
          <div className="Job-List-Priority Title-Font">PRIORITY</div>
          

        
          <div className="Job-List-Edit Title-Font">EDIT JOB</div>
          <div className="Job-List-Delete Title-Font">DELETE JOB</div>
       
         
        </div>
        {job.map((job,index) => (
          <Job job={job} key={index}/>
        ))}   
      </div>
    </div>
  );
}

export default App;
