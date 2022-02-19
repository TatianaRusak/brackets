module.exports = function check(str, bracketsConfig) {
  const objOfBrackets = {};
  bracketsConfig.map((elemArr) => {
    objOfBrackets[elemArr[0]] = elemArr[1];
  });

  let stack = [];

  for (let i = 0; i < str.length; i++){
  // console.log(str[i])
    let topElement = stack[stack.length - 1];
    // console.log(topElement)
    
    let keyBracket =  Object.keys(objOfBrackets).find(key => {
        return objOfBrackets[key] === str[i]
  });
    
// ================== проверки ======================
    
    if (str.length % 2) { 
      return false
    }
    
// =======================================
    

    if (Object.keys(objOfBrackets).includes(str[i]) && Object.values(objOfBrackets).includes(str[i])) {
      if (topElement === str[i]){
          stack.pop();
      } else {
        stack.push(str[i]); 
      }
        continue;
    }
// ===============================================
    
    if (Object.keys(objOfBrackets).includes(str[i])) {
        stack.push(str[i]);
// console.log('2')
// console.log(stack)
      
      } 

// ===============================================

    if (Object.values(objOfBrackets).includes(str[i]) && topElement === keyBracket) {  
          stack.pop();
// console.log('3')
      
        } 
      }
// ===============================================
  
// console.log('итог')
  return stack.length === 0;
}
