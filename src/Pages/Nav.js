import React from 'react'
import { Link } from 'react-router-dom'
import "../Pages/style.css"

const Nav = () => {
  return (
    <div>
    
      <ul className='Navbar' type='none'>
      
      <li><Link className='text' to="Home">Home</Link></li>
      <li><Link className='text' to="About">About</Link></li>
      <li><Link className='text' to="Projects">Project</Link></li>
      <li><Link className='text' to="Technologies">Technologies</Link></li>
      <li><Link className='text' to="Contact">Contact</Link></li>
      
      <li ><a href='https://github.com/pushpendra1124'><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" height={"34px"} /></a></li>
      <li className='Linkdin'><a href='https://www.linkedin.com/in/pushpendra-singh-931b2019b/'><img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="" height={"30px"} /></a></li>
     
      <li className='insta'><a href="https://www.instagram.com/_govind001_/"><img src="https://www.pngitem.com/pimgs/m/1-14415_instagram-logo-black-borders-png-transparent-background-instagram.png" alt="" height={"30px"}/></a></li>
      
      </ul>

    </div>
  )
}

export default Nav
