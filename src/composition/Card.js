import React from 'react';
var store= require ('./store.js');


function Card(props) {
    
    return (
        <div>
            {props.allCards.map(function (val) {
                return (
                    <div>
                        {store.allCards[val].title}<br />
                        {store.allCards[val].content}
                    </div>
                )
            }
            )}
        </div>
    );
}
export default Card;