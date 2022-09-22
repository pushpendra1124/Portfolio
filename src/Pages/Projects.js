import React from 'react'
import Blog_img from "../Pictures/Blog_img.png"
import Clock_img from "../Pictures/Clock_img.png"
import Netflix_mini_img from "../Pictures/Netflix_mini_img.png"
import Todo_app_js_img from "../Pictures/Todo_app_js_img.png"
// import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div className='Project_'>
            <h1 className='about' style={{textDecoration:"underline"}}>Project</h1>
            <h1 className='project_name'><a style={{color:"black"}} href="https://react-blog-page.netlify.app/">Blog Project </a> </h1> 
            <h3 className=' code_live'><a href="https://github.com/govind124/Blog-Project"> View Code on Github </a> </h3>
            <img className='project_img' src={Blog_img} alt="" />
            <h1 className='project_name'><a style={{color:"black"}} href="https://govind124.github.io/digital-clock/"> Clock Project</a></h1> 
            <h3 className=' code_live'><a href="https://github.com/govind124/digital-clock"> View Code on Github </a></h3>
            <img className='project_img' src={Clock_img} alt="" />
            <h1 className='project_name'><a style={{color:"black"}} href="https://csb-4kury7.netlify.app/"> Netflix Mini </a></h1> 
            <h3 className=' code_live'><a href="https://github.com/govind124/netflix_Clone"> View Code on Github </a></h3>
            <img className='project_img' src={Netflix_mini_img} alt="" />
            <h1 className='project_name'><a style={{color:"black"}} href="https://govind124.github.io/TODO-Web-JS/"> Todo Web </a> </h1>
             <h3 className=' code_live'><a href="https://github.com/govind124/TODO-Web-JS"> View Code on Github </a></h3>
             <img className='project_img2' src={Todo_app_js_img} alt="" />


    </div>
  )
}

export default Projects
