import './Intro.css'

export default function Intro() {

    const aboutMe = `Hey! My name's Brian and I'm a web developer and designer, and a self-employed business owner. In my free time I enjoy reading, learning, and playing video games!`

    return (
    <>
    <div className=".container-fluid intro--container">
        <div className="greeting--container">
            <h1 className="intro">Hi, I'm Brian!</h1>
            <h2>I'm a Web <span className="designer">Designer</span><span className="&"> & </span><span className="developer">Developer</span></h2>
        </div>
        <div id="About" className="about--container">
                <h3 className="about--header">About Me</h3>
                <p className="about--paragraph">{aboutMe}</p>
            </div>
        <div className="skills--container">
            <div className="skills--lists">
                <div className="technical--skills--container">
                    <ul className="technical--skills--list">
                    <h3>Technical Skills</h3>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Bootstrap</li>
                        <li>Adobe Photoshop</li>
                        <li>Git</li>
                        <li>NPM</li>
                    </ul>
                </div>
                <div className="soft--skills--container">
                <ul className="soft--skills--list">
                <h3>Soft Skills</h3>
                    <li>Passionate & Fast Learner</li>
                    <li>Problem Solver</li>
                    <li>Clean Code</li>
                    <li>Team Oriented</li>
                    <li>Self-Motivated</li>
                    <li>Disciplined</li>
                    <li>Consistent</li>
                </ul>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}