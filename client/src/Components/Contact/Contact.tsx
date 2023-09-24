import React from 'react'
import axios from 'axios'
import icon from '../../assets/icon.png'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export default function Contact() {
    const [focusedInput, setFocusedInput] = React.useState<string | null>(null);

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });

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
        axios.post('http://localhost:3000/api/submit', formData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <>
        <div className="container-fluid bottom--bg">
            <form onSubmit={handleSubmit} id="Contact" className="contact--container">

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
            </form>
                <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div>
                            <a href="#"><img className="footer--icon" src={icon} /></a>
                            <span className="footer--copyright">Brian Hartnett &copy; 2023</span>
                        </div>
                        <ul className="nav justify-content-end list-unstyled d-flex">
                            <li className="ms-3">
                                <a target="_blank" href="https://github.com/bju12290">
                                    <FontAwesomeIcon className="faIcon--footer" icon={faGithubSquare} />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a target="_blank" href="https://www.linkedin.com/in/brian-hartnett-jr-557436165/">
                                    <FontAwesomeIcon className="faIcon--footer" icon={faLinkedin} />
                                </a>
                            </li>
                            <li className="ms-3">
                                <Link to="/portfolio-site/resume">
                                    <FontAwesomeIcon className="faIcon--footer" icon={faFile} />
                                </Link>
                            </li>
                        </ul>
                </footer>
            </div>
        </>
    )
}


                      
                      