import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Resume() {

    return(
        <>
            <div className="resume--container">
                <div className="resume">
                    <a href="/portfolio-site"><FontAwesomeIcon className="resume--back--arrow" icon={faArrowLeft} />Back to Home</a>
                    <iframe className="resume--iframe" src="https://docs.google.com/document/d/1v4plIRAQvHKhxv6mPhzzgRn6n0LFALh0Z9edglE5lo8/preview"/>
                    <a href="https://drive.google.com/uc?export=download&id=1W7whCpdJ46SUnlB0ZYLFMR2z3EidP-Wx" download><FontAwesomeIcon className="resume--download--button" icon={faDownload} />Download Resume</a>
                </div>
            </div>
    </>
    )
}