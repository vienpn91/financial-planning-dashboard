export const sortAlphabetical = (property: string, sort?: number) => (a: any, b: any) => {
  const aValue = a[property];
  const bValue = b[property];
  const sortOrder = sort || 1;

  if (aValue && bValue) {
    if (aValue < bValue) {
      return -1 * sortOrder;
    }
    if (aValue > bValue) {
      return sortOrder;
    }
  }
  if (aValue && !bValue) {
    return sortOrder;
  }
  if (!aValue && bValue) {
    return -1 * sortOrder;
  }

  return 0;
};

export const sortNumeric = (property: string) => (a: any, b: any) => a[property] - b[property];
