// todo:很不懂
const getBucketIndex = (value, minValue, significantDigit, radixBase) =>
  Math.floor(((value - minValue) / significantDigit) % radixBase);

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) { // 基于基数初始化桶 10个桶
    buckets[i] = 0;
  }
  // 我们会基于数组中（行{6}）数的有效位（行{7}）进行计数排序（行{8}）
  for (let i = 0; i < array.length; i++) { // {6}
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase); // {7}
    buckets[bucketsIndex]++; // {8}
  }
  console.log(buckets)
  for (let i = 1; i < radixBase; i++) { // {9} 由于我们进行的是计数排序，我们还需要计算累积结果来得到正确的计数值
    buckets[i] += buckets[i - 1];
  }
  console.log(buckets)
  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);
    aux[--buckets[bucketsIndex]] = array[i];
  }
  console.log(aux)
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
};

function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  const minValue = findMinValue(array);
  const maxValue = findMaxValue(array);
  // Perform counting sort for each significant digit, starting at 1
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    // console.log('radix sort for digit ' + significantDigit);
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    // console.log(array.join());
    significantDigit *= radixBase;
  }
  return array;
}

console.log(radixSort([3,4,43,122,56]));