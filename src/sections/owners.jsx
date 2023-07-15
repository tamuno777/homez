import React from 'react'
import { Col, Row } from 'react-bootstrap'
import profile from '../assets/profile.png'
import content from '../assets/content.png'
import back from '../assets/back.svg'

export default function Owners() {
  return (
    <div className='mt-5 '>
      <div className="owner-content " style={{overflow:"hidden"}}>
          <Row className='first-col'>
            <Col sm={12} lg={6}  className='px-5 py-5'>
             <div >
              <img src={back} alt="" className="overlay" />
             <p className='owner-p1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>

            <div className="dir">
              <div className='ps-4 pe-2'>
                <img src={profile} alt="" className='profile '/>
              </div>
              <div className='pt-1'>
                <h6 style={{color:'orangered'}} >Harry Wilson</h6>
                <p className='owner-p2'>
                Property Owner
                </p>
              </div>
            </div>
             </div>
            </Col>
            <Col  sm={12} lg={6}  className='img'>
              <img src={content} alt="" className='content'/>
            </Col>
          </Row>
      </div>
    </div>
  )
}
