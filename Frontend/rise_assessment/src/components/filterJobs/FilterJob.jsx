import { React, useState, useRef, useEffect } from 'react';
import "./FilterJob.css";


export default function FilterJob(props) {

  const [option, setOption] = useState("default");
  const [jobName, setJobName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    e.target.setCustomValidity("")
    setOption(e.target.value);
  };

  // Filter by name
  useEffect(() => {

    if (jobName !== "") {
      props.setFilterJob(jobName)
    }

  }, [props, jobName]);


  // Filter by priority
  useEffect(() => {

    if (option !== "default") {
      props.setFilterPriority(option)
    }

  }, [props, option]);


  return (
    <div className="Container">
      <h2>Job List</h2>

      <div className="Filter-Bar">

        <div className="Filter-Job">
          <input className="Filter-Job-Name" type="text" placeholder="Search by name" maxLength={255}
            onChange={e => setJobName(e.target.value)}
            value={jobName} />
        </div>
        <div className="Filter-Priority">
          <select defaultValue={"default"} className="Filter-Job-Priority" onChange={handleChange}>
            <option disabled
              value="default">
              Priority (All)
            </option>
            {props.priorities.map((priority, index) => (
              <option key={index} value={priority.Priority}>
                {priority.Priority}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

  )
}
