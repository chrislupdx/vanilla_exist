const test = QUnit.test;
QUnit.module('render object test');

test('render object data to the screen', function(assert) {
    //arrange
    function makeSiteFriendlyExistObject(exitJsonmaybe) {
        const html = /*html*/`
       <main>
        <table id="table">
    <thead>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>first initial</th>
            <th>last initial</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${exitJsonmaybe.id}</td>
            <td>${exitJsonmaybe.username}</td>
            <td>${exitJsonmaybe.first_name}</td>
            <td>${exitJsonmaybe.last_name}</td>
        </tr>
    </tbody>
    
</table></main>`;
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }
    

    //act
    const expected = `<main>
    <table id="table">
        <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>first initial</th>
                <th>last initial</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>8966</td>
                <td>controlleburn</td>
                <td>C</td>
                <td>L</td>
            </tr>
        </tbody>
    </table></main>`;

    const dummyData = {
        "id": 8966,
        "username": "controlleburn",
        "first_name": "C",
        "last_name": "L",
    };
    
    const result = makeSiteFriendlyExistObject(dummyData);
    //assert


    assert.htmlEqual(result, expected);
});

