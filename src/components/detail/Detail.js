import React from 'react'
import { Link } from 'react-router-dom';
import './Detail.css';
const Detail=()=>{

    return (
        <div className="NotFound">
        <h1 className="NotFound-title">Please visit the page after some time</h1>
  
        <Link to="/" className="NotFound-link">Go to homepage</Link>
      </div>
        );
    
}
export default Detail