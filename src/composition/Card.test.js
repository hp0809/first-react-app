import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import './Card.css';
import renderer from 'react-test-renderer';
var store= require ('./store.js');


describe('Cards component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Card />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(<Card />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
    });
  });