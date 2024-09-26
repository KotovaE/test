//поиск простого числа другой вариант

let n=50;

for (let i = 2; i <= n; i++) {
  let a = 1; 
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
        a = 0;
        break;
    }; 
  }
  if (a == 1)
  console.log( i ); 
}
