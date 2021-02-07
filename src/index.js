
import sorter from './sorter.js';

function testConn() {
    let elem = document.getElementById('test-output')
    elem.innerHTML = 'LOOKS LIKE IT IS WORKING';
}

testConn();

sorter.mergeSort([1, 2, 3]);