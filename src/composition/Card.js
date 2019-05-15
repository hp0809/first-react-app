import React from 'react';
var store= require ('./store.js');


function Card(props) {    
    
    Object.keys(store.allCards).map((value, i) => {
        return `
         <div className='Card'>
            <h3>
                ${store.allCards[value].title}
            </h3>
            <p>
                ${store.allCards[value].content}
            </p>
        </div>
         `
    });
}



export default Card;