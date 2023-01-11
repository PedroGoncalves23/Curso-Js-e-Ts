let varA = 'A' //b
let varB = 'B' //c
let varC = 'C' //a

x = varA
varA = varB
varB = varC
varC = x

console.log(varA, varB, varC);



// SOLUÇAÕ 2 (MELHOR)

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);
