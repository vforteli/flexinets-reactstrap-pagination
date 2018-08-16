import React from 'react';
import ReactDOM from 'react-dom';
import PaginationControl from './PaginationControl';

it('shows pagination control without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PaginationControl loading={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
