// import React from 'react';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {
render() {
   return(
   <nav className="main-nav">
      <ul>
         <li><NavLink exact to='/mountains' onClick={() => this.props.onClick('mountains')}>Mountains</NavLink></li>
         <li><NavLink exact to='/dogs' onClick={() => this.props.onClick('dogs')} >Dogs</NavLink></li>
         <li><NavLink to='/sunsets' onClick={() => this.props.onClick('sunsets')}>Sunsets</NavLink></li>
      </ul>
   </nav>
   );
   }
}