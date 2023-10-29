import './Portfolio.css'
import projectOne from '../../assets/project-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faStripeS } from '@fortawesome/free-brands-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
    return (
        <div id="Portfolio" className="portfolio--container">
            <div className="project--left--container">
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
                            <p className="blue"><a href="https://ecommerce-site-584f2.web.app/" target='_blank'>Live Project</a> <span className="ms-5 me-5 pink">/</span> <a href="https://github.com/bju12290/e-commerce-site" target='_blank'>GitHub</a></p>
                        </div>
                        </div>
                </div>
                <div className="portfolio-img-container">
                    <a href="https://ecommerce-site-584f2.web.app/" target='_blank'><img className="img-fluid portfolio--img" src={projectOne}></img></a>
                </div>
            </div>
            {/* <div className="project--left--container">
                <div className="right--container--text">
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
                <img className="img-fluid portfolio--img" src={lorem} />
            </div>
            <div className="project--left--container">
                <div>
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
                <img className="img-fluid portfolio--img" src={lorem} />
            </div> */}
        </div>
    )
}