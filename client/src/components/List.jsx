import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form,Button,Card,Row,Col} from 'react-bootstrap'

export default function List({tasks,user}) {

    const [folder, SetFolder] = useState('')
    const [taskTitle, SetTaskTitle] = useState('')
    
    const foldersFromTasks = tasks.map( a => {
        return a.folder
    }).filter( (a,i,arr) => arr.indexOf(a) == i)
 
    const changeFolder = (e) => SetFolder(e.target.value)
    const changeTaskTitle = (e) => SetTaskTitle(e.target.value)
    
    const [folders, SetFolders] = useState([...foldersFromTasks])

    function handleNewTask(e){
        e.preventDefault()
        console.log(folder)
        SetFolders(() => [...folders,folder])
        fetch(`/api/${user}`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title:taskTitle,folder:folder})
          })
    }

    useEffect(() => {

    },[folders])

    return(
        
  <Row xs={1} md={2} className="g-4">

    <Col>
      <Card bg='secondary' >       
        <Card.Body >

        <Form onSubmit={handleNewTask}>  
            <Form.Group className="mb-3"  >
                <Form.Label>New Folder</Form.Label>
                <Form.Control type="text" onChange={changeFolder} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Task</Form.Label>
                <Form.Control type="text"  onChange={changeTaskTitle}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Create New Task
            </Button>
            </Form>
          
        </Card.Body>
      </Card>
    </Col>

    {folders.map((a,i) => (
        <Col>
        <Card key={i}>
          <Card.Body>
            <Card.Title>{a}</Card.Title>
            <Card.Text>
                RENDERIZAR TODAS LAS TASK ASOCIADAS A LA FOLDER Y EL DEL UPT
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}

  </Row>

    )
}