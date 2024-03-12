import AOS from 'aos';
import { useEffect } from "react";
import './Intro.css'
import 'aos/dist/aos.css';

export default function Intro() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
    <>
    <div className=".container-fluid intro--container">
        <div className="greeting--container">
            <h1 className="intro" data-aos="fade-up">Hi, I'm Brian!</h1>
            <h2 data-aos="fade-up">I'm a Web <span className="designer">Designer</span><span className="&"> & </span><span className="developer">Developer</span></h2>
        </div>
        <div id="About" className="about--container">
                <h3 className="about--header" data-aos="zoom-out">About Me</h3>
                <p className="about--paragraph" data-aos="zoom-out">Hey! I'm Brian and I'm a web developer and a self-employed business owner. In my free time I enjoy reading, learning, and playing video games!</p>
            </div>
        <div className="skills--container">
            <div className="skills--lists">
                <div className="technical--skills--container">
                <h3>Technical Skills</h3>
                    <ul className="technical--skills--list" data-aos="flip-left">
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Bootstrap</li>
                        <li>Adobe Photoshop</li>
                        <li>Figma</li>
                        <li>Git</li>
                        <li>NPM</li>
                        <li>Node.js</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className="soft--skills--container" data-aos="flip-right">
                <h3>Soft Skills</h3>
                <ul className="soft--skills--list">
                    <li>Passionate & Fast Learner</li>
                    <li>Problem Solver</li>
                    <li>Clean Code</li>
                    <li>Team Oriented</li>
                    <li>Self-Motivated</li>
                    <li>Disciplined</li>
                    <li>Consistent</li>
                </ul>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}