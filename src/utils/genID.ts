
export const genID = (length: number) => {
  return Number(
    Math.random()
      .toString()
      .substr(3, length) + Date.now(),
  ).toString(36);
};
