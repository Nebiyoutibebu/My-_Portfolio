
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'https://thingreenline.org.au/wp-content/uploads/2015/05/the-project-logo-300x148.jpg ) center / cover'}} >React Project #1</CardTitle>
            <CardText>
            Not much to show right now            </CardText>
            <CardActions border>
              <Button colored> GitHub  </Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'https://thingreenline.org.au/wp-content/uploads/2015/05/the-project-logo-300x148.jpg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
    
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'https://thingreenline.org.au/wp-content/uploads/2015/05/the-project-logo-300x148.jpg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            Not much to show right now            
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1> Java Script</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>NodeJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>MySQL</h1></div>
      )
    } else if(this.state.activeTab === 4) {
        return (
          <div><h1>React</h1></div>
        )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML/CSS</Tab>
          <Tab>Java Script</Tab>
          <Tab>NodeJS</Tab>
          <Tab>MySQL</Tab>
          <Tab>React</Tab>

        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;