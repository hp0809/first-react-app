import React from 'react';
import Card from './Card.js';
var store= require ('./store.js');

function List(header, cards) {
    return (
        <div>
            {store.lists.map(function (card) {
                return (
                    <section className="List">
                        <header>
                            <h2>{card.header}</h2>
                        </header>
                        <div className="List-cards">
                            {<Card />}
                        </div>
                    </section> 
                )
            }
            )}
        </div>  
    );
}

export default List;