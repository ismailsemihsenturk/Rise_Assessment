import "./App.css";
import CreateJob from "./components/createJobs/CreateJob";
import FilterJob from "./components/filterJobs/FilterJob";
import Job from "./components/jobs/Job";
import { useState, useEffect, useRef } from "react"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:8800/api";

function App() {

  const [priorities, setPriorities] = useState([]);
  const [job, setJob] = useState([]);
  const [filterJob, setFilterJob] = useState("");
  const [filterPriority, setFilterPriority] = useState("default");
  const data = useRef();


  useEffect(() => {
    const getPriorities = async () => {
      let priority = await axios.get("");
      setPriorities(priority.data);
    };
    getPriorities();

    if (localStorage.getItem("data") !== null) {
      data.current = JSON.parse(localStorage.getItem("data"));
      let filteredData = [];
      filteredData.push(data.current.filter(f => f.priority === "Urgent"))
      filteredData.push(data.current.filter(f => f.priority === "Regular"))
      filteredData.push(data.current.filter(f => f.priority === "Trivial"))
      filteredData = filteredData.flatMap(data => data);
      data.current = filteredData;
      setJob(filteredData)
    }

  }, []);


  // Filter by name
  useEffect(() => {
    if (filterJob !== "") {
      let filteredData = job.filter(f => f.jobName === filterJob)
      if (filteredData.length > 0) {
        setJob(filteredData)
      }
      else {
        setJob(data.current)
      }
    }

  }, [filterJob])


  // Filter by priority
  useEffect(() => {
    if (filterPriority !== "default") {
      let filteredData = data.current.filter(f => f.priority === filterPriority)
      if (filteredData.length > 0) {
        setJob(filteredData)
      }
    }
    else {
      setJob(data.current)
    }

  }, [filterPriority])




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
        {job.map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
