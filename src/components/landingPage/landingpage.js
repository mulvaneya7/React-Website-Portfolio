import React from 'react';
import {Grid, Cell} from 'react-mdl';
import me from '../../images/me.jpg';
import './landingpage.css';

const LandingPage = () => {
    return(
        <div style={{width:'100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                        src={me}
                        alt="avatar"
                        className="avatar-image" />
                    <div className="banner-text">
                        <h1>Software Engineer</h1>
                        <p style={{padding: 0, margin: -1}}> California State University, Fullerton</p>
                        <p style={{padding: 0}}> Bachelor of Science in Computer Science</p>
                        <hr/>
                        <p> Scrum development | Agile methodologies | Mobile development | Web development | Blockchain development | Assembly </p>
                        {/* <hr/>
                        <p> C/C++ | Python | React.js | JavaScript | Flutter & Dart | Java | Solidity </p> */}
                        <div className="social-links">
                            {/*Github Icon*/}
                            <a href="https://github.com/mulvaneya7?tab=overview&from=2019-08-01&to=2019-08-31" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github" aria-hidden="true"/>
                            </a>
                            {/*LinkedIn Icon*/}
                            <a href="https://www.linkedin.com/in/alex-mulvaney-90b18b189/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin" aria-hidden="true"/>
                            </a>
                        </div>

                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default LandingPage;