const { isArray } = Array;

export const getTypes = (type: any) => {
  if (isArray(type)) {
    const [START, COMPLETED, FAILED] = type;
    return [START, COMPLETED, FAILED];
  }
  return ['START', 'COMPLETED', 'FAIL'].map((postfix) => `${type}_${postfix}`);
};

export const prepareAction = (type: string, payload: any, ...restData: any) => ({
  payload,
  restData,
  type,
});

const isFunction = (target: any) => typeof target === 'function';
