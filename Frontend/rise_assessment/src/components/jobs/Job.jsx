import React, { useRef } from 'react';
import Modal from 'react-modal';
import "./Job.css";

const modelStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Job(props) {

  Modal.setAppElement(document.getElementById('root'));
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const priorityRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  }
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    e.preventDefault();
    priorityRef.current = e.target.value;
  }

  const handleSubmit = (e) => {

  }





  return (
    <div className="Container-Job">

      <div className="Job-Name-Job">
        <p>{props.job.jobName}</p>
      </div>

      <div className="Job-Priority-Job">
        <p className={`${"Priority-" + props.job.priority}`}>{props.job.priority}</p>
      </div>

      <div className="Job-Edit">
        <button onClick={openModal} className="Button-Job-Edit">Edit</button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modelStyles}
          contentLabel="Edit Job"
        >
          <div className="Modal-Header">
            <h3>Edit Job</h3>
            <button onClick={closeModal}>X</button>
          </div>

          <form onSubmit={e => handleSubmit(e)}>
            <div className="Modal-Container">

              <div className="Modal-Container-JobName">
                <h5>Job Name</h5>
                <input type={"text"} disabled value={props.job.jobName} />
              </div>

              <div className="Modal-Container-Priority">
                <h5>Priority</h5>
                <select defaultValue={props.job.priority} className="Select-Job-Priority" onChange={handleChange}>
                  {props.priorities.map((priority, index) => (
                    <option key={index} value={priority.Priority}>
                      {priority.Priority}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="Modal-Submit-Button">
              <button type="submit">Confirm</button>
            </div>
          </form>
        </Modal>


      </div>

      <div className="Job-Delete">
        <button className="Button-Job-Delete">Delete</button>
      </div>

    </div>
  )
}
