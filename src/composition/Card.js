import React from 'react';
import './Card.css';
var store= require ('./store.js');


function Card(props) {
    return (
        <div>
            {props.cardIds.map(function (val) {
                return (
                    <div className="Card">
                        <button type="button">delete</button>
                        <h3>{store.allCards[val].title}</h3>
                        <p>{store.allCards[val].content}</p>
                    </div>
                )
            }
            )}
        </div>
    );
}
export default Card;