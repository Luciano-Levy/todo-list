import { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nav from 'react-bootstrap/Nav'
import InfiniteScroll from 'react-infinite-scroll-component';
import ModalLogin from './components/Modal'
import List from './components/List'

function App() {

  const [tasks, SetTasks] = useState([])
  const [login, SetLogin] = useState(false)
  const user = localStorage.getItem('user')
  // login checker
  useEffect( () => {
    
    
    if (user) {
      
      fetch(`/api/${user}`, {
        method: "GET",
        
      })

    } else {
      SetLogin(true)
    }

    

  },[login])

  return (
    <div>
      <div>
      {login && <ModalLogin show={login} setShow={SetLogin}></ModalLogin>}
      <Nav activeKey="/home" className="bg-dark">
        <Nav.Item>
          <Nav.Link href="/" eventKey="disabled" disabled><h1 className="display-6" style={{fontFamily: 'mono',color: '#fd7e14'}}>To-Do</h1></Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      <div className='container mt-4'>
        <List tasks={tasks} user={user}></List>
      </div>
    </div>
  )
}

export default App
