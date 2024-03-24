export const removePercentEncoding = (inputString: string) => {
  return inputString.replace(/%22/g, " ");
};
