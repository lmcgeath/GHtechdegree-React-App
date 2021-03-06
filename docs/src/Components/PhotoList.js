import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => { 

   const results = props.data;
   let imgs;
   if (results.length > 0) {
      // Maps through the images and assigns urls to them. If none are returned, the NotFound component is called
   imgs = results.map(img => 
         <Photo url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id}/>
      );
   } else {
      imgs = <NotFound />
   }
  
  return(
    <ul className="photo-list">
      {imgs}
    </ul> 
  );
}

export default PhotoList;
