let v = [5, 3, 2, 4, 7, 1, 0, 6]

function bubbleSort(array){
    let len = array.length, i, j, stop;
    swap = false
    
    while(swap){
        swap = false
        for (i = 0; i < len; i++){

            for (j = 0, stop = len-i; j < stop; j++){
                if (array[j] > array[j+1]){
                    let temp = array[j]
                    array[j] = array[j+1]
                    array[j+1] = temp
                    swap = true
                }
            }
        }
    }

    return array
}
console.log(bubbleSort(v));