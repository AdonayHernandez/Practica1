function quickSort(array) {
    // Caso base
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];
    const equalsArray = [];
  
    for (const item of array) {
      if (item < pivot) {
        leftArray.push(item);
      } else if (item === pivot) {
        equalsArray.push(item);
      } else {
        rightArray.push(item);
      }
    }
  
    const subLeftArray = quickSort(leftArray);
    const subRightArray = quickSort(rightArray);
  
    return [
      ...subLeftArray,
      ...equalsArray,
      ...subRightArray
    ];
  }
  
  const numeros = [-1, 5, 51, 84, -5, 2, 4, 6, 8];
  console.log(quickSort(numeros));
  