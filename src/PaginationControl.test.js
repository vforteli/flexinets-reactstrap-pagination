import React from 'react';
import ReactDOM from 'react-dom';
import PaginationControl from './PaginationControl';
import renderer from 'react-test-renderer';

test('PaginationControl renders correctly', () => {
    const tree = renderer
        .create(<PaginationControl totalCount={100} pageSize={50} currentPage={1} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('PaginationControl renders last page button correctly', () => {
    const tree = renderer
        .create(<PaginationControl totalCount={500} pageSize={50} currentPage={10} maxSize={2} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
