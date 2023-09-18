import React from 'react'
import './Contact.css'

export default function Contact() {
    const [focusedInput, setFocusedInput] = React.useState<string | null>(null);

    const handleInputFocus = (inputId: string | null) => {
        setFocusedInput(inputId);
    };

    return (
        <>
            <form id="Contact" className="contact--container">

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
                        onFocus={() => handleInputFocus('message')}
                        onBlur={() => handleInputFocus(null)}>
                </textarea>

                <div className="button--container">
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        </>
    )
}