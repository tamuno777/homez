import React from 'react'
import {FaLinkedinIn,FaRss} from 'react-icons/fa'
import {AiFillPrinter, AiFillFacebook ,AiOutlineTwitter,AiOutlineGooglePlus} from 'react-icons/ai'
import {BsFillTelephoneFill,BsInstagram ,BsYoutube} from 'react-icons/bs'
import {BiLogoPinterest} from 'react-icons/bi'
import {HiLocationMarker} from 'react-icons/hi'


export default function Footer() {
  return (
    <div className='pt-5 foot'>
      <div className="d-flex foot-col1 pt-5  justify-content-between  foot-content">
          <div className='text-center  p-5 log '>
            <h1 className='logo2 p-5 '>Logo</h1>
          </div>
          <div className=' p-5 foot-second'>
            <p><span><HiLocationMarker/></span> 503 Faulconer Drive, Suit 4 .Charlottesville, CA, 12345</p>
           <div className="d-flex py-3 foot-sec">
           <p><span><BsFillTelephoneFill/></span>(123) 456-7890</p>
            <p><span><AiFillPrinter/></span>(123) 456-7890</p>
           </div>
           <div className="d-flex py-3 spann">
            <p>Social Media</p>
            <span><AiFillFacebook/></span>
            <span><AiOutlineTwitter/></span>
            <span><FaLinkedinIn/></span>
            <span><BsYoutube/></span>
            <span><BsInstagram/></span>
            <span><AiOutlineGooglePlus/></span>
            <span><BiLogoPinterest/></span>
            <span><FaRss/></span>
           </div>
          </div>
      </div>
      <div >
      <div className="buttom  ">
      <div className="d-flex juustify-content-between">
          
          <div className="d-flex juustify-content-between but  ">
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <p> HELP</p>
            <p> PRIVACY POLICY</p>
            <p> DISCLAIMER </p>
          </div>
          <div style={{opacity:'20px'}}>
            <p className='last'><small >Copyright © 2018 • Minimumliving cost. All rights reserved </small></p>
          </div>
        </div>

      </div>
       
        
      </div>

    </div>
  )
}
