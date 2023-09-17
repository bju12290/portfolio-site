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
                <img src={lorem} />
            </div>
            <div className="project--right--container">
                <img src={lorem} />
                <div>
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
            </div>
            <div className="project--left--container">
                <div>
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
                <img src={lorem} />
            </div>
        </div>
    )
}