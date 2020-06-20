import React from 'react';
import Room from '../room/room';
import './house.css';
export default class House extends React.Component {

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
      }

    render() {
      return (
        <div className='house'>
          <h1>{this.props.name}</h1>
          <div className='houseCard'>
              
            <Room 
            name={"room1"}/>

            <Room 
            name={"room2"}/>

            <Room 
            name={"room3"}/>

            <Room 
            name={"room4"}/>

          </div>
      </div>
      );
    }
  }