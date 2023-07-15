import React from 'react'
import {motion} from 'framer-motion'
import  { useState } from "react";

import Form from 'react-bootstrap/Form';
import './form.css'
export default function Forms() {
  const [files, setFiles] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const files = event.target.files;
    setFiles(files);
  };
  return (
    <div className="Form-content mt-5">
      <div >
        <p className='px-5 text-center'>Your property with us and be Confident that Your Room will be Filled Out!</p>
          <motion.div 
         initial={{opacity:0}}
          whileInView={{ opacity: 10 }}
          transition={{
            duration:1,
                    }}style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Form className='mx-5 form'>
          <div>
            <h4 className='text-center' style={{color:'orangered'}}>Add A New Property</h4>
          </div>
          <div className="d-flex">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name <span className='span'>*</span></Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Address <span className='span'>*</span></Form.Label>
          <Form.Control type="email" placeholder="Enter Address" />
        </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Unit Number <span>*</span></Form.Label>
          <Form.Control type="text" placeholder="Enter Unit" />
        </Form.Group>
          </div>
          
          <div className="d-flex">
            <Form.Group className="mb-3"    controlId="exampleForm.ControlInput1">
              <Form.Label>City <span>*</span></Form.Label>
              <Form.Select style={{width:'213px'}} className='s1' aria-label="Default select example">
              <option>Select City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
            <Form.Group className="mb-3"    controlId="exampleForm.ControlInput1">
              <Form.Label>State <span>*</span></Form.Label>
              <Form.Select style={{width:'213px'}} className='s1' aria-label="Default select example">
              <option>Select State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
            <Form.Group className="mb-3"    controlId="exampleForm.ControlInput1">
              <Form.Label>Room Type <span>*</span></Form.Label>
              <Form.Select style={{width:'213px'}} className='s1' aria-label="Default select example">
              <option>Select Room Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
         
          </div>

          <div className="d-flex">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price <span>*</span></Form.Label>
          <Form.Control type="text" placeholder="Enter Price" />
        </Form.Group>

        <Form.Group className="mb-3"    controlId="exampleForm.ControlInput1">
              <Form.Label>Room Type <span>*</span></Form.Label>
              <Form.Select style={{width:'213px'}} aria-label="Default select example">
              <option>Select Room Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

        </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description <span>*</span></Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
          </div>
            <div>
            <Form.Group className="mb-3" >
            <Form.Label>Upload Photos </Form.Label>

            <div className="input-file-upload py-4 px-5"multiple={true}
            style={{width:"100%",height:"100%",border:"1px dotted orangered"}}
            onChange={(event) => setFiles(event.target.files)}>
        <div className='text-center'>
        <p>
         Drag your images here or <span ><strong>Browse</strong></span> <br />
         <small style={{fontSize:"10px"}}>Supported: JPG, JPEG, PNG</small>

         </p>
        </div>
         
          
            </div>
        
          </Form.Group>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,}}>
              <button >Add New Property</button>
            </div>
        </Form>
          </motion.div>
        
      </div>
    </div>
  )
}
