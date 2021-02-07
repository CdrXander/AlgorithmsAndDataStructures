
export default class sorter {

    constructor() {

    }

    static mergeSort(toSort) {
        return null
    }

    static insertionSort(toSort) {
        return null
    }

    static quickSort(toSort) {
        return null
    }

    static selectionSort(toSort) {

        for (let i = 0; i < toSort.length; i++) {
            let min_index = i
            for (let j = i; j < toSort.length; j++) {
                if (toSort[j] < toSort[min_index]) {
                    min_index = j
                }
            }

            if (min_index != i) {
                var temp = toSort[i];
                toSort[i] = toSort[min_index];
                toSort[min_index] = temp;
            }
        }

        return toSort
    }

    static bubbleSort(toSort) {
        return null
    }
}
