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
      <div className='houseCard'>
          
      <h1>{this.props.name}</h1>
      <Room 
      name={"room1"}/>

      <Room 
      name={"room2"}/>

      <Room 
      name={"room3"}/>

      <Room 
      name={"room4"}/>

      </div>
      );
    }
  }