import React from 'react';
import AppSwitch from '../../core/switch/switch';
import AppSlider from '../../core/slider/slider';
import Button from '@material-ui/core/Button';
import RemoteModal from '../remote/remote';

import './equipment.css';

export default class Equipment extends React.Component {

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
      }

    


    render() {
     
      return(
          <div className='equipmentCard'>
              <h1>{this.props.equipmentName}</h1>
              <AppSwitch/>
              <AppSlider/>

              <RemoteModal/>
              
              
          </div> 
      );
    }
  }