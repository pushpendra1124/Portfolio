import React from 'react'
import Blog_img from "../Pictures/Blog_img.png"
import Netflix_mini_img from "../Pictures/Netflix_mini_img.png"
import Todo_app_js_img from "../Pictures/Todo_app_js_img.png"
// import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div className='Project_'>
         
         <h1 className='project_About' style={{textDecoration:"underline",color:"Brown"}}>Project</h1>
            {/* 
            <h1 className='project_name'><a style={{color:"black"}} href="https://react-blog-page.netlify.app/">Blog Project </a> </h1>  */}
            {/* <h3 className=' code_live'><a href="https://github.com/govind124/Blog-Project"> View Code on Github </a> </h3> */}
            {/* <img className='project_img' src={Blog_img} alt="" />
            <h1 className='project_name'><a style={{color:"black"}} href="https://govind124.github.io/digital-clock/"> Clock Project</a></h1>  */}
            {/* <h3 className=' code_live'><a href="https://github.com/govind124/digital-clock"> View Code on Github </a></h3> */}
            {/* <img className='project_img' src={Clock_img} alt="" />
            <h1 className='project_name'><a style={{color:"black"}} href="https://csb-4kury7.netlify.app/"> Netflix Mini </a></h1>  */}
            {/* <h3 className=' code_live'><a href="https://github.com/govind124/netflix_Clone"> View Code on Github </a></h3> */}
            {/* <img className='project_img' src={Netflix_mini_img} alt="" />
            <h1 className='project_name'><a style={{color:"black"}} href="https://govind124.github.io/TODO-Web-JS/"> Todo Web </a> </h1> */}
             {/* <h3 className=' code_live'><a href="https://github.com/govind124/TODO-Web-JS"> View Code on Github </a></h3> */}
             {/* <img className='project_img2' src={Todo_app_js_img} alt="" /> */}
         <container2 className="Project--">
         <div className='all_Project-01'>
         <h1 className='project_name'><a className='project_name' style={{textDecoration:"none"}} href="https://react-blog-page.netlify.app/">Blog Project </a> 
         </h1> 
         <img className='project_img-01' src={Blog_img} alt="" />
         <p className='project_bio'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
         <b>Tech Stack : HTML, CSS, JavaScript, React, Node
          </b>
          <a className='project_Source' href="https://github.com/govind124/Blog-Project"><i class="fa-solid fa-link" id='fa-1'> Source Code</i></a>
         </div>
         {/* <div className='all_Project-02'>
         <h1 className='project_name'><a style={{color:"black"}} href="https://govind124.github.io/digital-clock/"> Clock Project</a>
         </h1>
         <img className='project_img' src={Clock_img} alt="" />
         <p className='project_bio'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
         <b>Tech Stack : HTML, CSS, JavaScript</b>
         </div> */}
         
         <div className='all_Project-03'>
         <h1 className='project_name'><a className='project_name' style={{textDecoration:"none"}}  href="https://clone-netflix-inky.vercel.app/"> Netflix Mini </a></h1>
         <img className='project_img' src={Netflix_mini_img} alt="" />
         <p className='project_bio'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
         <b>Tech Stack:HTML, CSS, JavaScript, React</b>
         <a className='project_Source' href="https://github.com/govind124/clone_Netflix"><i class="fa-solid fa-link" id='fa-2'>source Code</i></a>
         
         </div> 
         
         <div className='all_Project-04'>
         <h1 className='project_name'><a className='project_name' style={{textDecoration:"none"}} href="https://govind124.github.io/TODO-Web-JS/"> Todo Web </a> </h1>
         <img className='project_img2' src={Todo_app_js_img} alt=""  />
         <p className='project_bio'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
         <b> Tech Stack : HTML, CSS, JavaScript</b>
         <a className='project_Source' href="https://govind124.github.io/TODO-Web-JS/"><i class="fa-solid fa-link" id='fa-3'>source Code</i></a>
         </div>
         </container2>

    </div>
  )
}

export default Projects
