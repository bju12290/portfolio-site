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
                      <span className="navbar--name">Brian Hartnett</span><span className="navbar--copyright">&copy; 2023</span>
                      <a href="#About" onClick={() => scrollToSection('About')}>About</a>
                      <a href="#Portfolio" onClick={() => scrollToSection('Portfolio')}>Portfolio</a>
                      <a href="#Contact" onClick={() => scrollToSection('Contact')}>Contact</a>
                  </div>
                  <div className="navbar--icons--container">
                      <a target="_blank" href="https://github.com/bju12290"><FontAwesomeIcon className="faIcon" icon={faGithubSquare} /></a>
                      <a target="_blank" href="https://www.linkedin.com/in/brian-hartnett-jr-557436165/"><FontAwesomeIcon className="faIcon" icon={faLinkedin} /></a>
                      <Link to="/resume"><FontAwesomeIcon className="faIcon" icon={faFile} /></Link>
                  </div>
            </div>
            <div className="menuToggle hidden">
                <input id="menu" type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                        <a href="#" onClick={() => scrollToSection('')}><li>Back to Top</li></a>
                        <a href="#About" onClick={() => scrollToSection('About')}><li>About</li></a>
                        <a href="#Portfolio" onClick={() => scrollToSection('Portfolio')}><li>Portfolio</li></a>
                        <a href="#Contact" onClick={() => scrollToSection('Contact')}><li>Contact</li></a>
                    </ul>    
            </div>
        </div>
    )
}