function pow(x, n) {
    if (n < 0) {
      alert("Отрицательные значения 'n' не поддерживаются");
      return;
    }
     let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
console.log( pow(3, -2));