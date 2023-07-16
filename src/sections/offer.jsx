import React from 'react'
import sitout from '../assets/sitout.png'
import group1 from '../assets/group1.png'
// import group2 from './vector.png'
import group3 from '../assets/Vector (1).png'
import group4 from '../assets/plant.png'
import group5 from '../assets/shild.png'
import group6 from '../assets/eye.png'
import { Col, Row } from 'react-bootstrap'
import '../App.css'
import {motion} from 'framer-motion'


export default function Offer() {
  return (
    <div className='offer-container'>
      <div className="offer-h1 pt-5 ps-5 ">
        <motion.p className='div ps-4'initial={{ opacity: 0 }}
          animate={{ opacity: 4 }}
          whileInView={{ opacity: 4 }}
          transition={{
            duration:2,
                    }}
                    >Minimum Living Cost Takes Care Of Everything</motion.p>
      </div>
      <Row className='px-0 pb-3 '>
        <Col sm={12} lg={4}>
          <img src={sitout} alt="" className='off' />
        </Col>
        <Col sm={12} lg={8} className='py-5'>
          <Row className='px-5 '> 
            <Col >
              <div className='offer-textz'>
              <img src={group1} alt="" />
              <p>Pay as Little
                  as possible!</p>

              </div>
            </Col>
            <Col>
            <div className=' mt-2 offer-text' >
            <img src={group5} alt="" className='bg-white  img-background'  />
              <p>Enjoy wisdom
                  of community!</p>

            </div>

            </Col>
            <Col>
              <div className='mt-2 offer-text'>
              <img src={group3} alt=""  className=' bg-white img-background' />
                <p>Let's somebody else
                  take care of Landlord!</p>
              </div>
            </Col>
            
          </Row>
          <Row className='ms-2  px-4 '>
          <Col>
              <div className='mt-2 offer-text'>
              <img src={group4} alt=""  className=' bg-white img-background' />
                <p className='ps-3'>Enjoy peaceful
                    Environment!</p>
              </div>
            </Col>
          <Col>
              <div className='mt-2 offer-text'>
              <img src={group5} alt=""  className=' bg-white img-background' />
                <p>Stay Safe!
                    Save Money!</p>
              </div>
            </Col>
          <Col>
              <div className='mt-2 offer-text'>
              <img src={group6} alt=""  className=' bg-white img-background' />
                <p>Pay for what
                    you use !</p>
              </div>
            </Col>
          </Row>
        
        </Col>
      </Row>
    </div>
  )
}
