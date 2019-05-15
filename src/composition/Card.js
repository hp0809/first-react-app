import React from 'react';
import List from './List.js'
var store= require ('./store.js');


function Card(props) {    
    
    Object.keys(store.allCards).map((_, i) => (<div className='Card'>
        <h3>
            ${store.allCards[value].title}
        </h3>
        <p>
            ${store.allCards[value].content}
        </p>
        <List />
    </div>));
}
export default Card;