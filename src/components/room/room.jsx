import React from 'react';
import Equipment from '../equipment/equipment';
import './room.css';


export default class Room extends React.Component {

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
      }

    render() {
      return (
      <div className='roomCard'>
      <h1>{this.props.name}</h1>
      <Equipment 
      equipmentName={"equipment1"}/>
      <Equipment 
      equipmentName={"equipment2"}/>
      <Equipment 
      equipmentName={"equipment3"}/>
      <Equipment 
      equipmentName={"equipment4"}/>
     
      </div>
      );
    }
  }