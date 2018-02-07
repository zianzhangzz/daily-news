import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Icon, Dropdown, Container } from 'semantic-ui-react';
import {tech, business} from '../constant';
import { fetchTopNews } from '../actions';
import { connect } from 'react-redux';

import Profile from './pages/Profile';
import Home from './pages/Home';
import Item from './pages/Item';

import './App.css';

class App extends Component {
  state = { visible: true, site: 'bbc-news', siteName: 'BBC'}
  componentDidMount() {
    this.props.fetchTopNews(this.state.site);
}
  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  changeSite = (name, apiName) => {
    let news =  this.props.fetchTopNews(apiName);
    this.setState({site: apiName, siteName: name, news: news});
  }

  renderItem = (sites) => {
    return sites.map((site, i) => {
        return <Dropdown.Item key={site.name} onClick={() => this.changeSite(site.name, site.apiName)}>
            <h4>{site.name}</h4>
        </Dropdown.Item>

    })
  }
  render() {
    const { visible } = this.state;

    return (
      <Container >
      <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='push' direction='top' visible={visible} icon='labeled'  inverted>
      <Menu.Item  onClick={this.toggleVisibility}>
          <Button  style={{background: 'transparent', color: 'white'}}>
          <h3 className='brand'>Daily Reading</h3>
          </Button>
      </Menu.Item>
      <Dropdown item pointing className='link item' text='Technology'>
        <Dropdown.Menu>
          {this.renderItem(tech)}
        </Dropdown.Menu>
    </Dropdown>
      <Dropdown item text='Business'>
        <Dropdown.Menu>
          { this.renderItem(business)}
        </Dropdown.Menu>
      </Dropdown>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Button style={{background: 'transparent'}} onClick={this.toggleVisibility}><Icon size='large' name='list layout' /></Button>
          <Router>
            <div>
              <Route exact path="/" render={(props) => (
                <Home topNews={this.props.topNews} siteName={this.state.siteName}/>  )}
              />
              <Route path="/profile" component={Profile}/>
              <Route path="/item" component={Item}/>
            </div>
          </Router>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </Container>
    );
  }
}

const mapStateToProps = ({topNews}) => {
  return {topNews}
}

const mapDispatchToProps = {
  fetchTopNews,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
