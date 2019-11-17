import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.postimg.cc/TYJJGyV0/nebu1.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Nebiyou Tibebu</h2>
            <h4 style={{color: 'grey'}}> Aspiring Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Before moving to Sweden, I studied law in Ethiopia and was working as a legal advisor for the Addis Ababa city administration. The limitation for me now is that my expertise in law cannot easily be transferred to the Swedish job market since the law I practiced is specific to Ethiopia. As a result, I am exploring career options that is practical, that I have interest in and that contributes to the community I live and in the long run can be expanded to serve the community I come from.
                  I have always had interest in the gaming industry, in designs, e-businesses and I also dabble in painting.Currently I´m learning coding and web page design hoping I can find opportunities to explore the above interests in the Swedish job market. 
                 At the moment, I work seven days a week as morning newspaper distributor but only for an average of 2:30-3:00 hours a day in the hours between 02:00 a.m. - 06:00 a.m. Hence, I am free for the rest of the day.
                  Though I am grateful to have this part time job currently, I like to think I have bigger potential that can be of use to the community I live in. Because of the aforementioned reasons, I am particularly interested in the internship position at your company</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p> Sofiavägen, 22241</p>
            <h5>Phone</h5>
            <p> 0720 341 165</p>
            <h5>Email</h5>
            <p>nebiyou0409@gmail.com</p>

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2004}
              endYear={2008}
              schoolName="Jimma University"
            
               />
               <Education
                 startYear={2012}
                 endYear={2016}
                 schoolName="Malmö University"
                />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2011}
              jobName="Junior Legal Advisor"
              jobDescription=" my duties and responsibilities included
              commenting on draft proclamations and regulations;
             Representing the bureau in different legal suits and seminars.;
              organizing awareness creating training programmes.;
              Giving written and oral legal opinions on various matters to different departments of
              the bureau.;
              preparing contractual agreements and directives.; 
             Preparation of annual budget, plans and reports for the department.; 
              Inspecting the general affair of business organizations ;
              serving as a member of the discipline and compliant hearing committee of the
              bureau " />
              
    
              < Experience
                startYear={2012}
                endYear={ 2019}
                jobName="Tidningsbud"
                jobDescription=" Delivering Morning newspapers, part time"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={65}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;