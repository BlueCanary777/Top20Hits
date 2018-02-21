import React from 'react';
const Top20Detail = (props) => {
  if(!props.feed.entry['im:name'].label) return null;
  return (
    <h4>{props.feed.entry['im:name'].label}</h4>
  )
}
export default Top20Detail;
