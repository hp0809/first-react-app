import React from 'react';
import './Card.css';


/* This was what I did, the following is copied from the bloc repo
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
            <button className='List-add-button'>+ Add Random Card</button>
        </div>
    );
}
export default Card;
*/

export default function Card(props) {
    return (
      <div className='Card'>
        <button
          type='button'
          onClick={() => props.onClickDelete(props.id)}
        >
          delete
        </button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    )
  }
  Card.propTypes = {
    onClickDelete: () => {}
  }