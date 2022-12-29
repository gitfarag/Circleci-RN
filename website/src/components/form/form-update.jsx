import { Button, Form } from "react-bootstrap";
import React from 'react'
import { useState } from "react";
import TodoHandler from "../../controller";
const _todo = new TodoHandler()

const FormUpdate = ({item,handleClose, getHandler}) => {
    const [tit,setTit] = useState('');
    const [des,setDes] = useState('');
    const handleSubmit =async (e)=>{
        try {
            e.preventDefault();
            const todo = {id:item.id,title:tit,disc:des}
            await _todo.updateItem(e,todo)
            getHandler()
            setTimeout(()=>{
                handleClose()
            },1000)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Form onSubmit={e=>handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-black-50">Title</Form.Label>
        <Form.Control 
        required
        type="text"
        placeholder={item.title}
        onChange={e=>setTit(e.currentTarget.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-black-50">Descriptipn</Form.Label>
        <Form.Control
        required 
        type="textarea" 
        placeholder={item.disc}
        onChange={e=>setDes(e.currentTarget.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormUpdate