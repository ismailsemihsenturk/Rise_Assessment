import { React } from 'react';
import "./FilterJob.css";


export default function FilterJob(props) {

  const filterByName = (e) => {
    console.log("name: " + e.target.value);
    props.setFilterJob(e.target.value);
  }

  const filterByPriority = (e) => {
    console.log("filter: " + e.target.value);
    props.setFilterPriority(e.target.value);
  }

  return (
    <div className="Container">
      <h2>Job List</h2>

      <div className="Filter-Bar">

        <div className="Filter-Job">
          <input className="Filter-Job-Name" type="text" placeholder="Search by name" maxLength={255}
            onChange={e => filterByName(e)}
          />
        </div>
        <div className="Filter-Priority">
          <select className="Filter-Job-Priority" onChange={e => filterByPriority(e)}>
            <option
              selected
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
