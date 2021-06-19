const formatDateSince = (value: string): string => {
  return value === 'daily' ? 'today' : value;
};

const formatter = {
  formatDateSince,
};

export default formatter;
