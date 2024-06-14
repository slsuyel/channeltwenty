export const convertToBanglaYear = year => {
  const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  return year
    .toString()
    .split('')
    .map(digit => banglaNumbers[digit])
    .join('');
};
