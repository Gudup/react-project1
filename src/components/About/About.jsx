import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}}/>
            
        </div>
        <div className="abot-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p> Our University is a prestigious institution dedicated to advancing knowledge and fostering innovation through high-quality education, research, and community engagement. Established in 1989, our university has grown into a vibrant academic community with a commitment to empowering students from all backgrounds to achieve their highest potential.</p>
          <p>our mission is to shape the leaders of tomorrow by fostering an inclusive learning environment that encourages curiosity, critical thinking, and a commitment to lifelong learning. Our vision is to be a globally recognized leader in higher education, research, and societal impact.</p>
          <p>With a focus on rigorous academic standards, we provide students with the skills and knowledge needed to excel in an ever-evolving world. Our faculty, who are experts in their respective fields, bring a wealth of experience and dedication to the classroom, fostering a collaborative and stimulating environment for intellectual growth.</p>

        </div>
    </div>
  )
}

export default About