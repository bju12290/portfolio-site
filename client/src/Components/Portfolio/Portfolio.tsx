import './Portfolio.css'
import projectOne from '../../assets/project-1.png'
import {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faStripeS } from '@fortawesome/free-brands-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
        <div id="Portfolio" className="portfolio--container">
            <div className="project--left--container" data-aos="fade-left">
                <div>
                    <h3>E-Commerce Site</h3>
                    <div className="project-one-details">
                        <p>A Fully Functional E-Commerce Site Built Using React, Bootstrap, Firebase, and the Stripe API. The site is left in test mode so you can experience full functionality without spending a dime. More info <a href="https://github.com/bju12290/e-commerce-site#usage" target='_blank'>here</a>.</p> 
                        <p className="pink">Technologies Used:</p>
                        <div className="ms-5 d-flex flex-flow-column justify-content-start align-items-center gap-5">
                            <div className="d-flex flex-column gap-4 align-items-center">
                                <FontAwesomeIcon className="icon" icon={faReact} /> 
                                <FontAwesomeIcon className="icon" icon={faBootstrap} /> 
                                <FontAwesomeIcon className="icon" icon={faFire} /> 
                                <FontAwesomeIcon className="icon" icon={faStripeS} /> 
                            </div>
                            <div className="d-grid gap-4 mt-4">
                                <p className="par-1 pink">React</p>
                                <p className="par-2 pink">Bootstrap</p>
                                <p className="par-3 pink">Firebase</p>
                                <p className="par-4 pink">Stripe API</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="blue"><a href="https://ecommerce-site-584f2.web.app/" target='_blank'>Live Project</a> </p>
                            <p><a href="https://github.com/bju12290/e-commerce-site" target='_blank'>GitHub</a></p>
                        </div>
                        </div>
                </div>
                <div className="portfolio-img-container">
                    <a href="https://ecommerce-site-584f2.web.app/" target='_blank'><img className="img-fluid portfolio--img" src={projectOne}></img></a>
                </div>
            </div>
             <div className="project--left--container" data-aos="fade-right">
                <div className="right--container--text">
                    <h3>Backloggr - Video Game Backlog Tracker</h3>
                    <p>Backloggr is a web app that gives users the ability to add their games and sort them by the "status" they hold in their backlog. Users can search for games and add them individually, or import their Steam Library by entering the profile URL associated with their account.</p>
                    <p className="shift--text--left pink">Technologies Used:</p>
                        <div className="ms-5 d-flex flex-flow-column justify-content-start align-items-center gap-5">
                            <div className="d-flex flex-column gap-4 align-items-center">
                                <FontAwesomeIcon className="icon" icon={faVuejs} /> 
                                <img width="50" alt="Tailwind CSS Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"/>
                                <FontAwesomeIcon className="icon" icon={faFire} /> 
                            </div>
                            <div className="d-grid gap-4 mt-4">
                                <p className="par-1 pink">Vue JS</p>
                                <p className="par-2 pink">Tailwind CSS</p>
                                <p className="par-3 pink">Firebase</p>
                            </div>
                        </div>
                        <div className="shift--text--left mt-5">
                                <p className="blue"><a href="https://video-game-collection-tracker.web.app/" target='_blank'>Live Project</a> </p>
                                <p><a href="https://github.com/bju12290/video-game-collection-tracker" target='_blank'>GitHub</a></p>
                                <p><a href="https://www.figma.com/file/DWIvdO6YKMCaU5M2PgcraF/Video-Game-collection-Tracker-Overview?type=design&mode=design&t=X1rDCT46vQcpYjEb-1" target='_blank'>Figma</a></p>
                        </div>
                </div>
                <a href="https://video-game-collection-tracker.web.app/" target='_blank'><img className="img-fluid portfolio--img" src="https://res.cloudinary.com/ddv5jvvvg/image/upload/v1709426134/vg-collection-tracker_cztlky.png" /></a>
            </div>
            {/* <div className="project--left--container">
                <div>
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
                <img className="img-fluid portfolio--img" src={lorem} />
            </div> */}
        </div>
        {/* <div id="UXPortfolio">
            <div className="project--right--container">
                <h3>Project Title</h3>
                <p>Project Card</p>
            </div>
            <img className="img-fluid portfolio--img" src={lorem} />
        </div> */}
        </div>
    )
}