import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import './List.css';
import renderer from 'react-test-renderer';
var store= require ('./store.js');

describe('List component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(<List />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
    });
  });