function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let smallestIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[smallestIndex]) {
          smallestIndex = j;
        }
      }
  
      if (i !== smallestIndex) {
        const temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
      }
    }
  
    return arr;
  }
  
  // Array de ejemplo.
  const arreglo = [64, 34, 25, 12, 22, 11, 90];
  console.log("Arreglo ordenado:", selectionSort(arreglo));
  