import React from 'react'
import axios from 'axios'
import './Contact.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


interface PopupState {
    message: string;
    type: string | null;
  }

export default function Contact() {
    useEffect(() => {
        AOS.init();
      }, [])
      
    const [focusedInput, setFocusedInput] = React.useState<string | null>(null);

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    const [popup, setPopup] = React.useState<PopupState | null>(null)

    const showMessage = (message: string, type: string | null) => {
        setPopup({ message, type })

        setTimeout(() => {
            setPopup(null)
        }, 5000)
    }

    const PopupElement = () => {
        if (popup?.message) {
            return (
            <div className={popup.type === "success" ? "success--popup" : "error--popup"}>{popup.message}</div>
            )
        }
        return
    }

    const handleInputFocus = (inputId: string | null) => {
        setFocusedInput(inputId);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post('https://us-central1-portfolio-site-1bc12.cloudfunctions.net/submitForm/api/submit', formData)
            .then((response) => {
                console.log(response.data)
                showMessage("Thanks for your submission!", "success")
            })
            .catch((error) => {
                console.error(error)
                showMessage("An error occured! Please try again!", "error")
            })
    }

    return (
        <>
        <div className="container-fluid bottom--bg">
            <form onSubmit={handleSubmit} id="Contact" className="contact--container" data-aos="zoom-out-up">

                <label 
                    htmlFor="name" 
                    style={{
                            color: focusedInput === 'name' ? 'var(--pink)' : 'var(--blue)',
                        }}>
                Name:
                </label>

                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    autoComplete="given-name"
                    required 
                    value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('name')}
                        onBlur={() => handleInputFocus(null)}
                />

                <label 
                    htmlFor="email" 
                    style={{
                            color: focusedInput === 'email' ? 'var(--pink)' : 'var(--blue)',
                        }}>
                Email:
                </label>

                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    autoComplete="given-email"
                    required 
                    value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('email')}
                        onBlur={() => handleInputFocus(null)}
                />
  
                <label 
                    htmlFor="message" 
                    style={{
                            color: focusedInput === 'message' ? 'var(--pink)' : 'var(--blue)',
                        }}>
                Message:
                </label>

                <textarea 
                    id="message" 
                    name="message" 
                    autoComplete="off"
                    required 
                    value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('message')}
                        onBlur={() => handleInputFocus(null)}>
                </textarea>

                <div className="button--container">
                    <button type="submit">Submit</button>
                </div>
                <PopupElement/>
            </form>
            <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div>
                            <a href="#">
                            <picture>
                                <source 
                                    srcSet="https://res.cloudinary.com/ddv5jvvvg/image/upload/w_30/icon_ospulh.webp 30w"
                                        sizes="30px"
                                    type="image/webp" />
                                <source 
                                    srcSet="https://res.cloudinary.com/ddv5jvvvg/image/upload/w_30/icon_a0qr34.avif 30w"
                                        sizes="30px"
                                    type="image/avif" />
                                <img alt="BPH Dev Icon" className="footer--icon" src="https://res.cloudinary.com/ddv5jvvvg/image/upload/w_30/v1710107525/icon_wg4dtn.png" width="1024" height="1024"/>
                            </picture>
                                </a>
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


                      
                      