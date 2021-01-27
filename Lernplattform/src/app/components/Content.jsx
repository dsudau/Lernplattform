import React, {useState} from 'react';

export function Content (props){

  return (
    <React.Fragment>
      {props.content.map(item => (
        <h1 key={`course-${item.id}`}>{item.name}</h1>
      ))}
    </React.Fragment>
  )
}