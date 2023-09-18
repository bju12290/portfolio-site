import './Portfolio.css'
import lorem from '../../assets/lorem.png'

export default function Portfolio() {
    return (
        <div id="Portfolio" className="portfolio--container">
            <div className="project--left--container">
                <div>
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
                <img className="img-fluid" src={lorem} />
            </div>
            <div className="project--left--container">
                <div className="right--container--text">
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
                <img className="img-fluid" src={lorem} />
            </div>
            <div className="project--left--container">
                <div>
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
                <img className="img-fluid" src={lorem} />
            </div>
        </div>
    )
}