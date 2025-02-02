export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};

export const snakeToCamelCase = (str: string): string => {
  return str
    .split('_')
    .reduce(
      (output, word, index) =>
        (output += index === 0 ? word : capitalize(word)),
      ''
    );
};
