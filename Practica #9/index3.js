function bubbleSort(array) {
    let isSwapped;
    do {
      isSwapped = false;
      for (let i = 0; i < array.length - 1; i++) { // Cambié array.length a array.length - 1
        if (array[i] > array[i + 1]) {
          const temporal = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temporal;
          isSwapped = true;
        }
      }
    } while (isSwapped);
    return array;
  }
  
  // Array de ejemplo.
  const myArray = [7, 2, 5, 8, 3, 9, 4];
  console.log(bubbleSort(myArray)); // Cerré el paréntesis aquí
  