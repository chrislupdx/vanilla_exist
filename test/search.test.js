const test = QUnit.test;
QUnit.module('searchbar');
import addFieldsToQuery from '../src/add-fields-to-query.js';

test('add search to empty hash', function(assert) {
    //arrange
    const existingQuery = '';
    const searchTerm = 'username'

    //act
    const result = addFieldsToQuery(existingQuery, searchTerm);
    
    //assert

    assert.equal(result, 'searchTerm=username&page=1');
});

function updateQuery(existingQuery, page){
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test('update existing query with new search field and reset page', assert => {
    //arrange
    const existingQuery = 'searchTerm=username&page=1';
    const page = 1;
    //act

    const result = updateQuery(existingQuery, page);
    const expected = 'searchTerm=username&page=1';
    //assert
    assert.equal(result, expected);
});