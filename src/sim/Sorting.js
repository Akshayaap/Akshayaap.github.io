

import { sleep } from '../util/Util.js';






class Sorting {
    constructor(size) {
        this.size = size;
        this.array = [];
        this.elements = [];
        this.generateArray();



        //this bindings
        this.generateArray = this.generateArray.bind(this);
        this.getElements = this.getElements.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.sort = this.sort.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.merge = this.merge.bind(this);
        this.mergeSortHelper = this.mergeSortHelper.bind(this);
        this.quickSort = this.quickSort.bind(this);

        this.quickSortHelper = this.quickSortHelper.bind(this);
        this.partition = this.partition.bind(this);
    }

    generateArray() {
        this.array = [];
        for (let i = 0; i < this.size; i++) {
            this.array.push(Math.floor(Math.random() * 800) + 1);

        }
    }

    getElements() {
        for (let i = 0; i < this.size; i++) {
            this.elements.push(document.querySelector('#bar-' + i));
            this.elements[i].style.height = this.array[i] + 'px';
            this.elements[i].style.width = 80 / this.size + '%';
        }
    }
    shuffle() {
        this.generateArray();
        for (let i = 0; i < this.size; i++) {
            this.elements[i].style.height = this.array[i] + 'px';
            this.elements[i].style.backgroundColor = '#00ffff';
        }
    }

    async sort() {
        //bubble sort algorithm with await function
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size - i - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {

                    let temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                    this.elements[j].style.height = this.array[j] + 'px';
                    this.elements[j + 1].style.height = this.array[j + 1] + 'px';

                    //change colors of bars
                    this.elements[j].style.backgroundColor = '#00ff00';
                    this.elements[j + 1].style.backgroundColor = '#00ff00';

                    await sleep(5);
                    //revert back colors
                    this.elements[j].style.backgroundColor = '#00ffff';
                    this.elements[j + 1].style.backgroundColor = '#00ffff';
                }
            }
            //change color for sorted part of an array
            for (let k = this.size - 1; k >= this.size - i - 1; k--) {
                this.elements[k].style.backgroundColor = '#ff0000';
            }
        }
    }


    async mergeSort() {
        await this.mergeSortHelper(this.array, 0, this.size - 1);
        console.log(this.array);
    }

    async mergeSortHelper(arr, left, right) {


        if (left < right) {
            console.log('here we go');
            let middle = Math.floor((left + right) / 2);
            await this.mergeSortHelper(arr, left, middle);
            await this.mergeSortHelper(arr, middle + 1, right);
            await this.merge(arr, left, middle, right);

        }
    }

    async merge(arr, left, middle, right) {


        let leftArr = arr.slice(left, middle + 1);
        let rightArr = arr.slice(middle + 1, right + 1);

        let i = 0;
        let j = 0;
        let k = left;

        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            this.elements[k].style.height = arr[k] + 'px';
            this.elements[k].style.backgroundColor = '#00ff00';

            await sleep(100);
            this.elements[k].style.backgroundColor = '#00ffff';
            k++;
        }

        while (i < leftArr.length) {
            arr[k] = leftArr[i];
            this.elements[k].style.height = arr[k] + 'px';
            this.elements[k].style.backgroundColor = '#00ff00';

            await sleep(100);
            this.elements[k].style.backgroundColor = '#00ffff';
            i++;
            k++;
        }

        while (j < rightArr.length) {
            arr[k] = rightArr[j];
            this.elements[k].style.height = arr[k] + 'px';
            this.elements[k].style.backgroundColor = '#00ff00';

            await sleep(100);
            this.elements[k].style.backgroundColor = '#00ffff';
            j++;
            k++;
        }
    }

    //quick sort algorithm with await function
    async quickSort() {


        await this.quickSortHelper(this.array, 0, this.size - 1);
    }


    //quich sort helper
    async quickSortHelper(arr, low, high) {
        if (low < high) {
            let pi = await this.partition(arr, low, high);
            await this.quickSortHelper(arr, low, pi - 1);
            await this.quickSortHelper(arr, pi + 1, high);
        }
    }


    //partition function
    async partition(arr, start, end) {
        const pivotValue = arr[end];
        this.elements[end].style.backgroundColor = '#ff0000';
        let pivotIndex = start;
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                this.elements[i].style.height = arr[i] + 'px';
                this.elements[pivotIndex].style.height = arr[pivotIndex] + 'px';
                this.elements[i].style.backgroundColor = '#00ff00';
                this.elements[pivotIndex].style.backgroundColor = '#00ff00';
                await sleep(100);
                this.elements[i].style.backgroundColor = '#00ffff';
                this.elements[pivotIndex].style.backgroundColor = '#00ffff';
                pivotIndex++;
            }
        }

        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]

        this.elements[end].style.height = arr[end] + 'px';
        this.elements[pivotIndex].style.height = arr[pivotIndex] + 'px';
        this.elements[end].style.backgroundColor = '#00ff00';
        this.elements[pivotIndex].style.backgroundColor = '#00ff00';
        await sleep(100);
        this.elements[end].style.backgroundColor = '#00ffff';
        this.elements[pivotIndex].style.backgroundColor = '#00ffff';
        this.elements[end].style.backgroundColor = '#00ffff';
        return pivotIndex;
    }



}

export { Sorting };