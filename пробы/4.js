//стрелочные функции


let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask('Ready?', 
() => console.log ("DA"), 
() => console.log("NET"));