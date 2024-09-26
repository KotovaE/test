function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
       let a = +prompt('Enter a',''); 
       let value = this.value + a ;
       return value;
    };
}

//let accumulator = new Accumulator(1);

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

//console.log(new Accumulator(1).read()); 
//console.log(accumulator.read()); 


console.log (new Accumulator(1).read());                                             

