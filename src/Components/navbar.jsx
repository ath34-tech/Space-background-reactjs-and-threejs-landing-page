import '../CSS/animation.css'
import '../CSS/navbar.scss'
import React from 'react'
const Navbar=()=>{

    return(
    
        <div class="navbar">
  <h1 id='heading-1'>LOGO<div id="nav-icon1" onClick={()=>{
    let element=document.getElementById("nav-icon1")
    let navs=document.getElementById("navs")
    let heading=document.getElementById("heading-1")
   
    // let hero=document.getElementById("hero")
    
    if(element.className==="nav-icon1"){
      element.className='nav-icon1 open'
      navs.className="navigation-open"
      heading.style.color='black'
      // element.style.background='black'
      
    }
    else{
      element.className='nav-icon1'
      navs.className='navigation-close'
      heading.style.color='white'
      // element.style.background='white'
    }
  }}>
  <span></span>
  <span></span>
  <span></span>
</div> </h1>
  <ul id="navs" className="navigation-close">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Work</a></li>
    <li><a href="#">Portfolio</a></li>
  </ul>
</div>
    )
}

export default Navbar