
export default class sorter {

    constructor() {

    }

    static mergeSort(toSort) {
    
        if(toSort.length <= 1) {
            return toSort;
        }
    
        let center = Math.floor(toSort.length / 2)
    
        let leftArr = this.mergeSort(toSort.slice(0, center));
        let rightArr = this.mergeSort(toSort.slice(center))
        
        return this.merge(leftArr, rightArr);
    }
    
    static merge(leftArr, rightArr) {
        let i = 0;
        let j = 0;
        let result = [];
    
        while(i < leftArr.length && j < rightArr.length ) {
            if(leftArr[i] <= rightArr[j]) {
                result.push(leftArr[i])
                i++
            }
            else {
                result.push(rightArr[j])
                j++
            }
        }
    
        while(i < leftArr.length) {
            result.push(leftArr[i])
            i++
        }
    
        while(j < rightArr.length) {
            result.push(rightArr[j])
            j++
        }
        return result
    }

    static insertionSort(toSort) {
        
        
        //loop
        for(let i = 0; i < toSort.length; i++) {
            //get item at sortedLimit
            let item = toSort[i];
            //Loop
            for(let j = 0 ; j < i; j++) {
                if(item <= toSort[j]) {
                   
                    for(let k = i-1; k >= j; k--) {
                        toSort[k+1] = toSort[k]
                    }
                    toSort[j] = item;
                    break;
                }
            }
        }

        return toSort;
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
