import React from 'react'
// import './Navbutton.css' 
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";


export default function Navbutton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

//   const btnClass = isActive ? "con active" : "con";
  return (
    <Link to={props.to} style={{textDecoration:"none"}} className=' lili'>
        <div className='btnClass  ' >
               
            <p className='btnClass px-4' style={{textDecoration:'none',color:'white',border:'none'}}>          
                {props.title}
            
            </p>

        </div>
    </Link>
  )
}

