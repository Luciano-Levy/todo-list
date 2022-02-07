import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form,ButtonGroup,Button,Modal,Row,Col, Stack} from 'react-bootstrap'

export default function Task({task,i,deleteTask}){

const[showEdit,SetEdit] = useState(false)

function handleDelete(){
fetch(`api/task/${task.taskId}`, {
method : "DELETE"
}).then(console.log)

deleteTask(task)
}

function handleEditShow(){
SetEdit(true)
}

function handleEditClose(){
SetEdit(false)
}

function handleEdit(e){
  e.preventDefault()
  handleEditClose()
  fetch(`api/task/${task.taskId}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({taskId:task.taskId,user:task.user,title:taskTitle,folder:task.folder, done:task.done})

  }).then(console.log)
}
function changeEditTask(e){
  SetTaskTitle(e.target.value)
}
const[taskDone,SetTaskDone] = useState(task.done)
const[taskTitle,SetTaskTitle] = useState(task.title)
return(
<Form key={i}>
  <div key={`inline-checkbox`} className="mb-3">
    <Form.Check checked={taskDone} onChange={()=> SetTaskDone(!taskDone)
      }
      inline
      label={taskTitle}
      name="group1"
      type='checkbox'
      id={`inline-checkbox-1`}
      />
      <ButtonGroup size='sm' className='ms-1' aria-label="Basic example">
        <Button variant="warning" onClick={handleDelete}>Delete</Button>
        <Button variant="success" onClick={handleEditShow}>Edit</Button>

      </ButtonGroup>
      <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='2' onSubmit={handleEdit}>
            <Form.Group className="mb-3" controlId="2">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={changeEditTask} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button form='editForm' variant="primary" onClick={handleEdit} type='submit'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  </div>

</Form>
)



}