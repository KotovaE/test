function Accumulator(startingValue) {
    let acc = {}

    acc.value = startingValue;

    acc.read = function() {
       let a = +prompt('Enter a',''); 
       this.value = this.value + a;
       //return this.value;
    };

    return acc;
}

let accumulator = new Accumulator(1);


//console.log(new Accumulator(1)); // {value: 1, read: ƒ}
//console.log(accumulator);       // {value: 1, read: ƒ}

//console.log(new Accumulator(1).read); // ƒ () {
                                              //let a = +prompt('Enter a',''); 
                                              //  this.value = this.value + a ;
                                         // } 

  //console.log(accumulator.read);      // ƒ () {
                                              //let a = +prompt('Enter a',''); 
                                              //  this.value = this.value + a ;
                                         // }                                  

//console.log(new Accumulator(1).read()); // вернет Undefined, т.к функция read ничего не возвращает
console.log(accumulator.read());           // вернет Undefined, т.к функция read ничего не возвращает

console.log(accumulator)


//console.log(new Accumulator(1).value);


alert (accumulator.value);