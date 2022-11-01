import React from 'react';
import "./Job.css";


export default function Job(props) {

  console.log("jobs: " + props.job);
  return (
    <div className="Container-Job">

      <div className="Job-Name-Job">
        <p>{props.job.jobName}</p>
      </div>

      <div className="Job-Priority-Job">
        <p className={`${"Priority-" + props.job.priority}`}>{props.job.priority}</p>
      </div>

      <div className="Job-Edit">
        <button className="Button-Job-Edit">Edit</button>
      </div>

      <div className="Job-Delete">
        <button className="Button-Job-Delete">Delete</button>
      </div>

    </div>
  )
}
