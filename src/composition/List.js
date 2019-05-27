import React from 'react';
import Card from './Card.js';
import './List.css';


/* This was what I did, the following is copied from the bloc repo
function List(header, cards) {
    return (
        <>
            {store.lists.map(function (card) {
                return (
                    <section className="List">
                        <header className="List-header">
                            <h2>{card.header}</h2>
                        </header>
                        <div className="List-cards">
                            <Card cardIds={card.cardIds} key={card.id} />
                        </div>
                        
                    </section> 
                )
            }
            )}
        </>  
    );
}

export default List;

*/

export default function List(props) {
    return (
      <section className='List'>
        <header className='List-header'>
          <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
          {props.cards.map((card) =>
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              content={card.content}
              onClickDelete={props.onClickDelete}
            />
          )}
          <button
            type='button'
            className='List-add-button'
            onClick={() => props.onClickAdd(props.id)}
          >
            + Add Random Card
          </button>
        </div>
      </section>
    )
  }

  List.defaultProps = {
    onClickAdd: () => {},
  }