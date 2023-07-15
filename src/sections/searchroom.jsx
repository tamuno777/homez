import React from 'react'
import { Col ,Row} from 'react-bootstrap'
import image1 from '../assets/imagea.png'
import image2 from '../assets/imageb.png'
import image3 from '../assets/imagec.png'
import image4 from '../assets/imaged.png'

export default function Searchroom() {
  return (
    <div style={{overflow:'hidden',marginTop:'50px'}} >  
      <Row className='px-5 mb-5'>
        <Col className='me-3 room-img '>
          <div className="d-flex">
            <img src={image1} alt="" className='long'/>
            <img src={image2} alt="" className='short'/>
          </div>
          <div className="d-flex">
            <img src={image3} alt="" className='long-short'/>
            <img src={image4} alt="" className='wide'/>
          </div>
        
        </Col>
        <Col className='search pe-5 ps-2 '>
            <div>
              <h4 className='search-h'>
              Flexibility and options to suit your lifestyle.
              </h4>
              <p className='search-p pe-5 mb-3'>
              You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
              </p>
            </div>
            <button className='search-button'>Search Room</button>
        </Col>
      </Row>
    </div>
  )
}
