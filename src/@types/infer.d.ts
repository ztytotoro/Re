type ArrayItemType<T> = T extends Array<infer R>
  ? R
  : T extends string
  ? string
  : unknown;

type Target = any[] | string;

type Handler<T> = (item: ArrayItemType<T>, index: number, target: T) => any;
