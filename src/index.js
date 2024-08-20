module.exports = function check(str, bracketsConfig) {

  const bracketsMap = {};
  const sameBrackets = [];
  const bracketStart = [];
  const bracketEnd = [];
  const stack = [];

  bracketsConfig.forEach(pair => {
    bracketsMap[pair[1]] = pair[0];
    bracketStart.push(pair[0]);
    bracketEnd.push(pair[1]);  

    if (pair[0] === pair[1]) {
      sameBrackets.push(pair[0]);
    }
  });

  for (let i = 0; i < str.length; i++) {

    if (sameBrackets.includes(str[i])) {
      if (stack.length && stack[stack.length - 1] === str[i]) stack.pop();
      else stack.push(str[i]);
    }

    else if (bracketStart.includes(str[i])) stack.push(str[i]);

    else if (bracketEnd.includes(str[i])) {
      if (!stack.length || stack.pop() !== bracketsMap[str[i]]) return false;
    }
  }

  return true;
}
