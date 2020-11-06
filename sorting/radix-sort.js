const getBucketIndex = (value, significantDigit, radixBase) =>
  Math.floor((value / significantDigit) % radixBase)

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex
  const buckets = []
  const result = []
  for (let i = 0; i < radixBase; i++) { // 基于基数初始化桶 10个桶
    buckets[i] = []
  }

  for (let i = 0; i < array.length; i++) {
    bucketsIndex = getBucketIndex(array[i], significantDigit, radixBase);
    buckets[bucketsIndex].push(array[i])
  }
  console.log(JSON.stringify(buckets))
  for (let i = 0; i < buckets.length; i++) {
    while(buckets[i].length > 0) {
      result.push(buckets[i].shift())
    }
  }
  console.log(result)
  return result
};

function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array
  }
  const minValue = findMinValue(array)
  const maxValue = findMaxValue(array)
  // Perform counting sort for each significant digit, starting at 1
  let significantDigit = 1
  while ((maxValue - minValue) / significantDigit >= 1) {
    // console.log('radix sort for digit ' + significantDigit);
    array = countingSortForRadix(array, radixBase, significantDigit, minValue)
    // console.log(array.join());
    significantDigit *= radixBase
  }
  return array
}

// console.log(radixSort([3,4,43,122,56]))
console.log(radixSort([1,19,17,21,33,120]))

/**
 * 基数排序
 * 计数排序和桶排序的结合
 * 按位计算，个->十->百..
 * 10进制，基数为10，创建10个桶
 * 将个位值存入对应索引桶（队列）中
 * 将队列头取出到结果数组
 * 根据结果数组再计算百位
 */