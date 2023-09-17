import './Portfolio.css'

export default function Portfolio() {
    return (
        <div id="Portfolio" className="portfolio--container">
            <div className="project--left--container">
                <div>
                    <h3>Project Title</h3>
                    <p>Project Card</p>
                </div>
                <img src="./src/assets/lorem.png" />
            </div>
            <div className="project--right--container">
                <img src="./src/assets/lorem.png" />
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
                <img src="./src/assets/lorem.png" />
            </div>
        </div>
    )
}