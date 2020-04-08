import React from 'react';
import StoryDetail from './StoryDetail';

const StoryList = (props) => {
  if (props.stories == null || props.stories.length === 0) {
    return <p>Slow news day......</p>
  }
  return (
    <div>
    {props.stories.map((story, index) => {
      return (
        <StoryDetail
        key={index}
        title ={story.title}
        author={story.by}
        url={story.url}
        handleClick={props.handleClick}
        />
      )
    })}
    </div>
  )
}

export default StoryList;
