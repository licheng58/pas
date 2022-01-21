
const censor = (key: any, value: any) => {
  if (typeof value === 'function') {
    return Function.prototype.toString.call(value);
  }
  return value;
};
export const formatJson = (data: JSON) => {
  return JSON.stringify(data, censor, 2);
};
