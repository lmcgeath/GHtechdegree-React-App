import React, {Component} from 'react';
import {
   BrowserRouter,
   Route,
   Switch
} from 'react-router-dom';
import axios from 'axios';
import Search from './Components/Search';
import pageNotFound from './Components/pageNotFound';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
import './css/index.css';
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
   //Fetches Flickr images with mountains as the default
   performSearch = (query = 'mountains') => {
     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`
     )
     //Sets imgs state to the list of photos returned from the api call and sets loading state to false
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
     return (
   <BrowserRouter>
       <div>
         <div className="container">
            <Search onSearch={this.performSearch} />
            {/* Uses Switch to render the pageNotFound component if the url cannot be matched */}
            <Switch>
               <Route exact path="/"/>
               <Route path="/GHtechdegree-React-App/"/>
               <Route path="/dogs" />
               <Route path="/mountains" />
               <Route path="/sunsets" />
               <Route component={pageNotFound} />
            </Switch> 
            <Nav onClick={this.performSearch} />
           
         </div>  
      </div>  
         <div className="photo-container">  
         {/* Creates the loading indicator if no images are displayed to the page  */}
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

