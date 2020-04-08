import React, { Component }  from 'react';
import NewsContainer from './containers/NewsContainer';

class App extends Component {
  render(){

    return(
      <NewsContainer stories = "https://hacker-news.firebaseio.com/v0/topstories.json"/>
    );
  }

}

export default App;
