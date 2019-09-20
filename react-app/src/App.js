import React, {Component} from 'react';
import {
   BrowserRouter,
   Route
} from 'react-router-dom';
import axios from 'axios';
import Search from './Components/Search';
// import NotFound from './Components/NotFound';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
// import logo from './logo.svg';
import './App.css';
import apiKey from './config.js';

export default class App extends Component {
  
   constructor() {
     super();
     this.state = {
       imgs: [],
       loading: true
     };
   } 
 
   componentDidMount() {
     this.performSearch();
   }
   
   performSearch = (query = 'cats') => {
     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`
     )
       .then(res => {
         this.setState({
           imgs: res.data.photos.photo,
           loading: false
         });
       })
       .catch(error => {
         console.log('Error fetching and parsing data', error);
       });    
   }
  
   render() { 
     console.log(this.state.imgs);
     return (
      <BrowserRouter>
       <div>
         <div className="container">
             <Search onSearch={this.performSearch} /> 
             <Nav /> 
           </div>   
         </div>    
         <div className="main-content">
           {
             (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoList data={this.state.imgs} />
           }          
         </div>
      </BrowserRouter>
     );
   }
 }

