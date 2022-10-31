import { React, useState } from "react";
import "./CreateJob.css";


export default function CreateJob(props) {

    const [option, setOption] = useState({});
    const handleChange = (e) => {
        setOption(+e.target.value);
    };

    return (
        <div className="Container">

            <h3>Create New Job</h3>
                             <div className="Titles">
                <h1> Job Name</h1>
                <h1> Job Priority</h1>
            </div>
            <div className="Inputs">
                <input type="text" />
                <select onChange={handleChange}>
                    <option disabled
                        value="default">
                        Please Select a Priority
                    </option>
                    {props.priorities.map((priority, index) => (
                        <option key={index} value={priority.Priority}>
                            {priority.Priority}
                        </option>
                    ))}
                </select>
            </div>
        </div>


    )
}
