import React from 'react';
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
                            {card.cardIds}
                        </div>
                    </section> 
                )
            }
            )}
        </div>  
    );
}

export default List;