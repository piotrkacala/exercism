export const find = (input, target) => {
  let arr = input.sort((a, b) => a - b)
  let offset = 0

  while (arr.length) {
    const mid = Math.floor(arr.length / 2)
    const midValue = arr[mid]

    if (midValue === target) {
      return offset + mid
    }

    if (midValue > target) {
      arr = arr.slice(0, mid)
      continue
    }

    arr = arr.slice(mid + 1)
    offset += mid + 1
  }

  throw new Error('Value not in array')
};
