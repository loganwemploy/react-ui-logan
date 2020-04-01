import React, { Component } from 'react';
import axios from 'axios';


export class page2 extends Component {
 

  state = {
    isLoading: true,pers:[]  }
   
    async componentDidMount(){
    
    const response = await fetch("https://caniganintl.com/wp-json/wp/v2/posts/",{ 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    const data = await response.json();
    this.setState({pers: data.results,isLoading:false});

    }
  
  render() {
    return (
      <div>
        <h1>uutwo</h1>
        {this.state.pers.id}
      </div>
    )
  }
}

export default page2
