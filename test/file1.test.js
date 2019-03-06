const test = QUnit.test;
QUnit.module('render object test');

import passSiteFriendlyObjectToDom from '../src/passSiteFriendlyObjectToDom.js';

test('render object data to the screen', function(assert) {
    //arrange
    

    //act
    const expected = /*html*/`
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
                    <td>8966</td>
                    <td>controlleburn</td>
                    <td>C</td>
                    <td>L</td>
                </tr>
            </tbody>
        </table>
    </main>`;

    const dummyData = {
        "id": 8966,
        "username": "controlleburn",
        "first_name": "C",
        "last_name": "L",
    };
    
    const result = passSiteFriendlyObjectToDom(dummyData);
    //assert


    assert.htmlEqual(result, expected);
});

