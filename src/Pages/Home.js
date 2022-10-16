import React from 'react-pdf'
import "../Pages/style.css"
// import mypic from "../Pages/mypic.jpg"
import pic from '../Pages/Web-developer2.jpg'
import Pushpendra1 from "../Pages/Pushpendra2.pdf"



const Home = () => {
  return (
    <div >
      <container className="Bio">
     <h1 className='font'>Hi,</h1>
     <h1 className='font'>My Name is PUSHPENDRA SINGH</h1>
     <h1 className='font'>Full Stack Developer</h1>
     <h2 className='font1'>Building a Website is Easy,Designing one takes skill..</h2>
   
     <button className='resume'><a  style={{textDecoration:"none",color:"white",}} href={Pushpendra1} download={Pushpendra1}>Download Resume</a></button>

     </container>
     <img className='my_pic' src={pic} alt="Nothing--04" />
    </div>
  )
}
export default Home
