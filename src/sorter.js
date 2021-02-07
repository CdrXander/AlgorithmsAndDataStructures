
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
        let isSorted = false;
        while(!isSorted) {
            isSorted = true;
            for(let i = 0; i < toSort.length-1; i++){
                if(toSort[i] > toSort[i+1]) {
                    this.swap(toSort, i, i+1);
                    isSorted = false;
                }
            }
        }

        return toSort
    }


    static swap(array, idx1, idx2) {
        var temp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = temp;
    }
}
