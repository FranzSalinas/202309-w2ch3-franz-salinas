export const arrayLength = (arr) => {
  let count = 0;

  // eslint-disable-next-line no-unused-vars
  for (const _item of arr) {
    count++;
  }

  return count;
};

export const arrayPush = (array, newItem) => {
  const arraySize = arrayLength(array);
  array[arraySize] = newItem;
  return arrayLength(array);
};

export const arrayPop = (array) => {};
