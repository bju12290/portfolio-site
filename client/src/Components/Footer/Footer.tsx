import icon from '../../assets/icon.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export default function footer() {

    return(
        <>
        <div className="container-fluid footer--bg">
                <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div>
                            <a aria-label="Back to Top" href="#"><img className="footer--icon" src={icon} width="1024" height="1024"/></a>
                            <span className="footer--copyright">Brian Hartnett &copy; 2025</span>
                        </div>
                        <ul className="nav justify-content-end list-unstyled d-flex">
                            <li className="ms-3">
                                <a aria-label="Brian's Github Footer Link" target="_blank" href="https://github.com/bju12290">
                                    <FontAwesomeIcon className="faIcon--footer" icon={faGithubSquare} />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a aria-label="Brian's LinkedIn Footer Link" target="_blank" href="https://www.linkedin.com/in/brian-hartnett-jr-557436165/">
                                    <FontAwesomeIcon className="faIcon--footer" icon={faLinkedin} />
                                </a>
                            </li>
                            <li className="ms-3">
                                <Link aria-label="Brian's Resume Footer Link" to="/resume">
                                    <FontAwesomeIcon className="faIcon--footer" icon={faFile} />
                                </Link>
                            </li>
                        </ul>
                </footer>
            </div>
            </>
    )
}