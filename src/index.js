
import sorter from './sorter.js';

function testConn() {
    let elem = document.getElementById('test-output')
    elem.innerHTML = 'LOOKS LIKE IT IS WORKING';
}

testConn();

sorter.insertionSort([25, 62, 15, 58, 64, 12, 14, 99, 1, 42]);