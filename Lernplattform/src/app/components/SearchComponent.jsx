import React from 'react';

export function SearchComponent (props) {
    return (
      <input 
        id={props.id}
          type = "text"
          value = { props.value }
          onChange = { props.onChange }
          onClick = { props.onClick }
          placeholder = "Suche"
      />
    );
}