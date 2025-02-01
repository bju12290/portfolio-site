import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Navbar() {
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            const topNavbar = document.querySelector('.top--navbar--container') as HTMLElement | null
            const sideMenu = document.querySelector('.menuToggle') as HTMLElement | null
            const scrollPos = window.scrollY
            const transitionPosition = 200
          
            if (topNavbar && sideMenu) {
              if (scrollPos >= transitionPosition) {
                topNavbar.classList.add('hidden')
                sideMenu.classList.remove('hidden')
              } else {
                topNavbar.classList.remove('hidden')
                sideMenu.classList.add('hidden')
              }
            }
          })
    })

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    
    return (
        <div className="navbar--container">
            <div className="top--navbar--container">
                  <div className="navbar--content">
                      <span className="navbar--name">Brian Hartnett <span className="navbar--copyright">&copy; 2025</span></span>
                      <a className="h-50" href="#About" onClick={() => scrollToSection('About')}>About</a>
                      <a className="h-50" href="#Portfolio" onClick={() => scrollToSection('Portfolio')}>Portfolio</a>
                      <a className="h-50" href="#Contact" onClick={() => scrollToSection('Contact')}>Contact</a>
                  </div>
                  <div className="navbar--icons--container">
                      <a aria-label="Brian's Github Navbar Link" target="_blank" href="https://github.com/bju12290"><FontAwesomeIcon className="faIcon" icon={faGithubSquare} /></a>
                      <a aria-label="Brian's LinkedIn Navbar Link" target="_blank" href="https://www.linkedin.com/in/brian-hartnett-jr-557436165/"><FontAwesomeIcon className="faIcon" icon={faLinkedin} /></a>
                      <Link aria-label="Brian's Resume Navbar Link" to="/resume"><FontAwesomeIcon className="faIcon" icon={faFile} /></Link>
                  </div>
            </div>
            <div className="menuToggle hidden">
                <label className="hidden hidden--label" htmlFor="menu">Menu</label>
                <input tabIndex={-1} id="menu" type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                      <li><a tabIndex={-1} href="#" onClick={() => scrollToSection('')}>Back to Top</a></li>
                      <li><a tabIndex={-1} href="#About" onClick={() => scrollToSection('About')}>About</a></li>
                      <li><a tabIndex={-1} href="#Portfolio" onClick={() => scrollToSection('Portfolio')}>Portfolio</a></li>
                      <li><a tabIndex={-1} href="#Contact" onClick={() => scrollToSection('Contact')}>Contact</a></li>
                    </ul>    
            </div>
        </div>
    )
}