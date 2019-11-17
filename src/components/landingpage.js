import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src=" https://i.postimg.cc/TYJJGyV0/nebu1.png "
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Aspiring Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | NodeJS | MySQL | React</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nebiyou-tibebu-woldemariam-401a31102/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Nebiyoutibebu?tab=repositories" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/fcc52d8d66a-c863-4929-95ba-c5c1e1902c95" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
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