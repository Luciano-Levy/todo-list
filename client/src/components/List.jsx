import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task'
import {Form,ButtonGroup,Button,Card,Row,Col, Stack} from 'react-bootstrap'

export default function List({SetLogin,user}) {


    const [tasks,SetTasks] = useState([])
    const [folder, SetFolder] = useState('')
    const [taskTitle, SetTaskTitle] = useState('')
 
    const changeFolder = (e) => SetFolder(e.target.value)
    const changeTaskTitle = (e) => SetTaskTitle(e.target.value)
    
    const [folders, SetFolders] = useState([])

    function handleNewTask(e){
        e.preventDefault()
        if (!folders.includes(folder)) {
          SetFolders(() => [...folders,folder])
        }
        const id = parseInt(Math.random().toString().substring(13))
        const newTask = {taskId:id,user:user,title:taskTitle,folder:folder, done:false}
        SetTasks([...tasks,newTask])
        fetch(`/api/task`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTask)
          }).then(console.log)
          console.log(folders)
    }
     
    useEffect(()=> {if (user) {
      
      fetch(`api/task/${user}`, {
        method: "GET",
        
      }).then(res => res.json()).then(getArray => {
        //filtrar los que ya estan
        SetTasks(getArray)
        SetFolders(getArray.map( a => a.folder).filter( (a,i,arr) => arr.indexOf(a) === i))

      })

    } else {
      SetLogin(true)
    }

    

  },[])
    function deleteTask(task){
      
      SetTasks(tasks.filter((a) => {return a.taskId !== task.taskId}))
      
  
    }

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
            <Button variant="info" style={{background:'#fd7e14',border:'#fd7e14'}} type="submit">
                Create New Task
            </Button>
            </Form>
          
        </Card.Body>
      </Card>
    </Col>

    {folders.map((folderName,i) => (
        <Col key={i}>
        <Card >
          <Card.Body>
            <Card.Title>{folderName}</Card.Title>
            <Card.Text>
              <Stack gap={3}>
                {
                  tasks.filter((a) => a.folder === folderName).map((task,i) => (
                    
                    <Task taskTitle={taskTitle} SetTaskTitle={SetTaskTitle} i={i} task={task} deleteTask={deleteTask}></Task>
                    
                  ))
                }
              </Stack> 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}

  </Row>

    )
}