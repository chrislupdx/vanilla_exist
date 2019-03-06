const test = QUnit.test;
QUnit.module('searchbar');

funciton addFieldsToQuery(existingQuery, searchTerm){
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('add search to empty hash', function(assert) {
    //arrange
    const existingQuery = '';
    const searchTerm = 'username'

    //act
    const result = addFieldsToQuery(existingQuery, searchTerm);
    
    //assert


    assert.htmlEqual(result, 'searchTerm=username&page=1');
});

