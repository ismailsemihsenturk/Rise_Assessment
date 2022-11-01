import { React, useState, useRef } from "react";
import "./CreateJob.css";


export default function CreateJob(props) {

    const [option, setOption] = useState("default");
    const [jobName, setJobName] = useState("");
    const selectRef = useRef(HTMLSelectElement);
    const inputRef = useRef(HTMLInputElement);


    const handleChange = (e) => {
        e.preventDefault();
        e.target.setCustomValidity("")
        setOption(e.target.value);
    };

    const createJob = (e) => {
        e.preventDefault();

        if (option === "default") {
            selectRef.current.setCustomValidity("Please select a priority");
            selectRef.current.reportValidity();
        }
        else {
            selectRef.current.setCustomValidity("");

            let dataObj = {
                jobName: jobName,
                priority: option
            };
            if (localStorage.getItem("data") !== null) {
                let data = JSON.parse(localStorage.getItem("data"));
                data[data.length] = dataObj;
                localStorage.setItem("data", JSON.stringify(data))

                if (props.job.length === 0) {
                    props.setJob(data)
                }
                else {
                    props.setJob([...props.job, dataObj])
                }

            }
            else {
                localStorage.setItem("data", JSON.stringify([dataObj]))
                props.setJob(dataObj)
            }

            console.log("submitted")
            setJobName("")
        }
    }


    return (
        <div className="Container">

            <h2>Create New Job</h2>

            <form className="Form-Container" onSubmit={(e) => createJob(e)}>
                <div className="Job-Name">
                    <h4 className="Title"> Job Name</h4>
                    <input ref={inputRef} className="Input-Job-Name" type="text" placeholder="Please enter a name" required pattern="^[a-zA-Z0-9_ ]*$" maxLength={255}
                        onInvalid={e => e.target.setCustomValidity('Please fill the blank with only alphanumeric characters')}
                        onInput={e => e.target.setCustomValidity("")}
                        onChange={e => setJobName(e.target.value)}
                        value={jobName} />
                </div>

                <div className="Job-Priority">
                    <h4 className="Title"> Job Priority</h4>
                    <select defaultValue={"default"} ref={selectRef} required className="Select-Job-Priority" onChange={handleChange}>
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

                <div className="Job-Create">
                    <h3 className="Secret">button</h3>
                    <button className="Button-Job-Create" type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}
