type ArrayItemType<T> = T extends Array<infer R>
  ? R
  : T extends string
  ? string
  : unknown;
