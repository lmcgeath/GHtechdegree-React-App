import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {
render() {
   return(
   <nav className="main-nav">
      <ul>
         {/* Sets Navlinks to their prospective routes to allow data to be fetched when clicked based on the category */}
         <li><NavLink exact to='/mountains' onClick={() => this.props.onClick('mountains')}>Mountains</NavLink></li>
         <li><NavLink to='/dogs' onClick={() => this.props.onClick('dogs')} >Dogs</NavLink></li>
         <li><NavLink to='/sunsets' onClick={() => this.props.onClick('sunsets')}>Sunsets</NavLink></li>
      </ul>
   </nav>
  
   );
   }
}