const a = {
  vars: {},
  set(
    this: {
      vars: {
        [key: string]: any;
      };
    },
    name: string,
    value: any
  ) {
    this.vars[name] = value;
  },
  get(
    this: {
      vars: {
        [key: string]: any;
      };
    },
    name: string
  ) {
    return this.vars[name];
  }
};

const { get: _get, set: _set } = a;

export const get = _get.bind(a);
export const set = _set.bind(a);
