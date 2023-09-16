import React from 'react'
import './Navbar.css'


export default function Navbar() {
    // When NavBar Reaches x Position, Collapse It to the Left
    // At the same position, make the Hamburger Menu Visible

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            const topNavbar = document.querySelector('.top--navbar--container') as HTMLElement | null;
            const sideMenu = document.querySelector('.menuToggle') as HTMLElement | null;
            const scrollPos = window.scrollY;
            const transitionPosition = 200; // Adjust this value as needed
          
            if (topNavbar && sideMenu) {
              if (scrollPos >= transitionPosition) {
                topNavbar.classList.add('hidden');
                sideMenu.classList.remove('hidden')
              } else {
                topNavbar.classList.remove('hidden');
                sideMenu.classList.add('hidden')
              }
            }
          });
    })
    
    return (
        <div className="navbar--container">
            <div className="top--navbar--container">
                <div className="navbar navbar--content">
                    Brian Hartnett <span className="navbar--copyright">&copy; 2023</span>
                    <a href="/#About">About</a>
                    <a href="/#Portfolio">Portfolio</a>
                    <a href="/#Contact">Contact</a>
                </div>
            </div>
            <div className="menuToggle hidden">
                <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                        <a href="#"><li>Back to Top</li></a>
                        <a href="#About"><li>About</li></a>
                        <a href="#Portfolio"><li>Portfolio</li></a>
                        <a href="#Contact"><li>Contact</li></a>
                    </ul>    
            </div>
        </div>
    )
}