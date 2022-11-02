import React, { useRef, useState } from 'react';
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
  const [editModelIsOpen, setEditOpen] = useState(false);
  const [deleteModelIsOpen, setDeleteOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const openEditModal = () => {
    setEditOpen(true);
  }
  const openDeleteModal = () => {
    setDeleteOpen(true);
  }
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  const closeModal = () => {
    setEditOpen(false);
    setDeleteOpen(false);
    setDeleteConfirmation(false);
  }

  const handleChange = (e) => {
    e.preventDefault();
    props.job.priority = e.target.value;
  }

  const handleEdit = (e) => {
    e.preventDefault();
    props.handleEdit(props.job);
    closeModal();
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setDeleteConfirmation(true);
  }

  const handleDeleteConfirmation = (e) => {
    e.preventDefault();
    props.handleDelete(props.job);
    closeModal();
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
        <button onClick={openEditModal} className="Button-Job-Edit">Edit</button>

        <Modal
          isOpen={editModelIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modelStyles}
          contentLabel="Edit Job"
        >
          <div className="Modal-Header">
            <h3>Edit Job</h3>
            <button onClick={closeModal}>X</button>
          </div>

          <form onSubmit={e => handleEdit(e)}>
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
              <button id='approve' type="submit">Confirm</button>
            </div>
          </form>
        </Modal>


      </div>

      <div className="Job-Delete">
        <button onClick={openDeleteModal} className="Button-Job-Delete">Delete</button>

        <Modal
          isOpen={deleteModelIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modelStyles}
          contentLabel="Delete Job"
        >
          <div className="Modal-Header">
            <h3>Delete Job</h3>
            <button onClick={closeModal}>X</button>
          </div>

          <form onSubmit={e => handleDelete(e)}>
            <div className="Modal-Container">

              <div className="Modal-Container-JobName">
                <h5>Job Name</h5>
                <input type={"text"} disabled value={props.job.jobName} />
              </div>

              <div className="Modal-Container-Priority">
                <h5>Priority</h5>
                <select disabled defaultValue={props.job.priority} className="Select-Job-Priority" onChange={handleChange}>
                  {props.priorities.map((priority, index) => (
                    <option key={index} value={priority.Priority}>
                      {priority.Priority}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="Modal-Submit-Button">
              <button id='approve' type="submit">Confirm</button>
            </div>
          </form>
        </Modal>


        <Modal
          isOpen={deleteConfirmation}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modelStyles}
          contentLabel="Confirmation"
        >
          <div className="Modal-Header">
            <h3>Are you sure you want to delete it?</h3>
          </div>

          <form onSubmit={e => handleDeleteConfirmation(e)}>
            <div className="Modal-Container">

              <div className="Modal-Container-JobName">
                <h5>Job Name</h5>
                <input type={"text"} disabled value={props.job.jobName} />
              </div>

              <div className="Modal-Container-Priority">
                <h5>Priority</h5>
                <select disabled defaultValue={props.job.priority} className="Select-Job-Priority" onChange={handleChange}>
                  {props.priorities.map((priority, index) => (
                    <option key={index} value={priority.Priority}>
                      {priority.Priority}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="Modal-Submit-Button">
              <button id='approve' type="submit">Approve</button>
              <button id='reject' onClick={closeModal}>Reject</button>
            </div>
          </form>
        </Modal>

      </div>

    </div>
  )
}
