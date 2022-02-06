import { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export default function Modallogin({show, setShow}){
    const [password,SetPassword] = useState('')
    const [user,SetUser] = useState('')
    const handleClose = () => setShow(false);     
    const handleShow = () => setShow(true);
    const changeUser = (e) => SetUser(e.target.value) 
    const changePassword = (e) => SetPassword(e.target.value) 



    function handleLogin(e){
        e.preventDefault()
        if (user == 'admin' & password === 'admin'){
            const id = (Math.random() + 1).toString(36).substring(2)
            console.log(id); 
            localStorage.setItem('user',id)
            handleClose()
        }
        

    }


     return(
        <Modal show={show}>
            <Modal.Header >
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='loginForm' onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter User" onChange={changeUser} />
                    <Form.Text className="text-muted">
                    See README github
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={changePassword}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" form='loginForm' type='submit'>
                Sign In
                </Button>
            </Modal.Footer>
      </Modal>
    )


}