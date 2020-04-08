import React, {Component} from 'react';

class StoryDetail extends Component {

  render(){
    return(
      <div className = "story">
        <h4 onClick={this.props.handleClick(this.url)}>{this.props.title}</h4>
        <h6>by {this.props.author}</h6>
      </div>
    )
  }

}

export default StoryDetail;
