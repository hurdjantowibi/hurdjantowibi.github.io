import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://pbs.twimg.com/profile_images/1160398372701741057/8MPAzXgw_400x400.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Front-End Web Developer</h1>

                            <hr />
                        <p>HTML/CSS | Boostrap | JavaScript | React</p>
                        
                        <div className="social-links">

                            {/* linkedin */}
                            <a href="https://www.linkedin.com/in/hurdjantowibi/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/hurdjantowibi" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/hurdjantowibi/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram"  aria-hidden="true" />
                            </a>


                        </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;