import React from 'react';
import PaginationControl from './PaginationControl';
import renderer from 'react-test-renderer';

test('PaginationControl renders correctly with even max size', () => {
    const tree = renderer
        .create(
            <div>
                <PaginationControl totalCount={500} pageSize={50} currentPage={1} maxSize={4} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={2} maxSize={4} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={3} maxSize={4} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={4} maxSize={4} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={7} maxSize={4} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={8} maxSize={4} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={9} maxSize={4} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={10} maxSize={4} />
            </div>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('PaginationControl renders correctly with odd max size', () => {
    const tree = renderer
        .create(
            <div>
                <PaginationControl totalCount={500} pageSize={50} currentPage={1} maxSize={5} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={2} maxSize={5} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={3} maxSize={5} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={4} maxSize={5} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={7} maxSize={5} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={8} maxSize={5} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={9} maxSize={5} />
                <PaginationControl totalCount={500} pageSize={50} currentPage={10} maxSize={5} />
            </div>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

