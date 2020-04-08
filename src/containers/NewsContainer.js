import React, { Component } from 'react';
import StoryList from '../components/StoryList';

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      storyDetail: ""
    }
    this.handleClick= this.handleClick.bind(this);
    this.getStory = this.getStory.bind(this);
  }

  componentDidMount(){
    this.loadStories(this.props.stories)
  }

  loadStories(stories) {
    fetch(stories)
    .then(res => res.json())
    .then((data) => {
      const newData = data.slice(0, 30);
      const promises = newData.map((id) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(res => res.json());
      });

      Promise.all(promises)
      .then((results) => {
        this.setState({ stories: results, filteredStories: results});
      });
    });



  }

  getStory(url) {
    fetch(url)
    .then(res => res.json())
    .then((data) => this.setState({storyDetail: data}))
  };

  handleClick(url) {
    this.getStory(url)
  }

  render(){
    return (
      <div>
      <h1>You're Tapped Into the Main-Frame</h1>
      <StoryList
      stories={this.state.stories}
      handleClick = {this.handleClick}
      />
      </div>
    )
  }


}

export default NewsContainer;
