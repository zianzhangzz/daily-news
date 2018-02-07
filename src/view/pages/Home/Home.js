import React, { Component } from 'react';
import NewsList from '../../components/NewsList';

class Home extends Component {


    render() {
        console.log(this.props.topNews)
        return (
            <div>
                <h2>Top News</h2>
                <h3>{this.props.siteName}</h3>
                <NewsList newsCollection={this.props.topNews}/> 
            </div>

        );
    }
}

  

  
  
export default Home;