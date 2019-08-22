```ts
const classkeyWord = fullmatch(word('class'));
const whiteSpaces = character(' ', Count.LeastOne);
const className = word();
const classBody = wrapBy('{', '}', {
  withWrap: true
});
const classPattern = pattern(
  classkeyWord,
  optional(className),
  whiteSpaces,
  classBody
);

result = find(codeString, classPattern);

console.log(result.className);
console.log(result.classBody);

const variableDeclareKeyword = or(letKeyWord, varKeyword, constKeyword);
const variableName = exclude(['-', '/', '\\']);

const variablePattern = pattern(variableDeclareKeyword, variableName);

result = find(codeString, variablePattern);
console.log(result.variableName);
```
