const { test, expect, beforeAll } = require("@jest/globals");
import sorter from '../src/sorter';


let input1 = [3, 2, 1];
let input2 = [25, 62, 15, 58, 64, 12, 14, 99, 1, 42];
let inputReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let inputSingle = [1];
let inputLarge = [];

let answer1 = [1, 2, 3];
let answer2 = [1, 12, 14, 15, 25, 42, 58, 62, 64, 99];
let answerReversed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answerSingle = [1];
let answerLarge = [];

beforeAll(() => {

    for (let i = 0; i < 10000; i++) {
        inputLarge.push(Math.floor(Math.random() * 1000));
    }

    answerLarge = inputLarge.sort();

});


describe("Selection Sort", () => {
    test('should sort basic input', () => {
        expect(sorter.selectionSort(input1)).toEqual(answer1);
    });

    test('should sort mid sized input', () => {
        expect(sorter.selectionSort(input2)).toEqual(answer2);
    })

    test('should sort a reversed input', () => {
        expect(sorter.selectionSort(inputReversed)).toEqual(answerReversed);
    })

    test('should return a single item array', () => {
        expect(sorter.selectionSort(inputSingle)).toEqual(answerSingle);
    })

    test('should sort an array of 10,000 items', () => {
        expect(sorter.selectionSort(inputLarge)).toEqual(answerLarge)
    })
})


/* describe("Sorting algorithms", () => {

    test('merge sort should sort basic input', () => {
        expect(sorter.mergeSort(input1)).toBe(answer1);
    });

    test('insertion sort should sort basic input', () => {
        expect(sorter.insertionSort(input1)).toBe(answer1);
    });

    test('quick sort should sort basic input', () => {
        expect(sorter.quickSort(input1)).toBe(answer1);
    });



    test('bubble sort should sort basic input', () => {
        expect(sorter.bubbleSort(input1)).toBe(answer1);
    });

}) */
