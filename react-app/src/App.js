import React, {Component} from 'react';
import axios from 'axios';
import Search from './Components/Search';
import Photo from './Components/Photo';
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
       <div>
         <div className="main-header">
           <div className="inner">
             <h1 className="main-title">Gallery App</h1>
             <Search onSearch={this.performSearch} />  
           </div>   
         </div>    
         <div className="main-content">
           {
             (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoList data={this.state.imgs} />
           }          
         </div>
       </div>
     );
   }
 }

