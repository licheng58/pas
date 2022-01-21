

/**
 * Shallow comparison of two objects.
 * @param objA Object A to be compared
 * @param objB Object B to be compared
 * @return The same object return false, otherwise return true.
 */
const compareObj = (objA: object, objB: object): boolean => {
  return (
    JSON.stringify(Object.entries(objA).sort(), null, 0) !==
    JSON.stringify(Object.entries(objB).sort(), null, 0)
  );
};

export default compareObj;
