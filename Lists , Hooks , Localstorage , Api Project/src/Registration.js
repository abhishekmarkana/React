import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const Registration = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='App'>
                <h3>Modal login Form</h3>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>LOGIN TO MY ACCOUNT</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1">

                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Password"

                                />
                            </Form.Group>
                            {['checkbox'].map((type) => (
                                <div key={type} className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`Remembre Me On This Computer`}
                                    />

                                </div>
                            ))}

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-warning" className='w-75' onClick={handleClose} id='bttn-reg'>LOGIN</Button>
                    </Modal.Footer>
                    <div className='regis'>
                        <p>Forgot Your Password?</p>
                        <p><a href="#">Creat A New Account</a></p>
                    </div>
                </Modal>
            </div>


        </>





    )
}

export default Registration
