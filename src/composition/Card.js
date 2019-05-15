import React from 'react';
var store= require ('./store.js');


function Card(props) {    
    
    Object.keys(store.allCards).map((_, i) => {
        
        return `
         <div className='Card'>
            <h3>
                ${store.allCards[i].title}
            </h3>
            <p>
                ${store.allCards[i].content}
            </p>
        </div>
         `
    });
}



export default Card;