import React from 'react';
import definitionContent from './definition-content';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CardSlider = () => {
  return (
    <>
      <div className="cards" >
     { definitionContent.map((definit,key)=> (
       <div style={{zIndex:'99999'}} >
         
<div className="card">
  <div className="card__image-holder">
    <img key={key} src={definit.url} style={{width:'300px',height:'225px'}} className="card__image"  alt="wave" />
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn" style={{marginTop:'-45px',height:'55px',width:'55px'}}>
     <p style={{marginTop:'16px',marginLeft:'16px',fontWeight:'bold'}}>{definit.price}</p>
    </a>
    <h2 style={{marginTop:'20px',color: '#07f'}}>
        {definit.name}
        {/* <small>{definit.description}</small> */}
    </h2>
    <a href="#" className="btn" style={{marginTop:'7px',height:'25px',width:'25px',backgroundImage:`url(${definit.url2})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></a>
    <p>{definit.content}</p>
  </div>
</div>

       </div>
     ))}
</div>
    </>
  )
}

export default CardSlider
