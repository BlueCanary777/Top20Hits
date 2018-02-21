import React from 'react';
import Top20Detail from '../components/Top20Detail';

class Top20Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      top20: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.addEventListener('load', () => {
      if(xhr.status !==200) return;
      const jsonString = xhr.responseText;
      const data = JSON.parse(jsonString);
      /*set state of Top20 from the API*/
      this.setState({ top20: data})
    })
    xhr.send();
  }
  render(){
    return (
      <div>
        <h3>The UK Top 20!</h3>
        <Top20Detail />
      </div>
    )
  }
}
