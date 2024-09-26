// В соревнованиях по дартс принимают участие 3 команды. 
// В каждой команде по 4 участника. У каждого участника есть 3 попытки.
//  Количество очков, которое получает каждый участник за один бросок, вводится с клавиатуры. 
//  Максимальное количество баллов за 1 попытку – 60. 
//  Отобразите победителя (т.е. номер участника, набравшего наибольшее количество баллов, и его результат)
//   от каждой команды.
//    Участник какой команды показал лучший результат?

let a;
let b;
let c;


function ochkiIgroka(){
        a=+prompt('vvedi 1 ochko:','');
        b=+prompt('vvedi 2 ochko:','');
        c=+prompt('vvedi 3 ochko:','');
        console.log(a,b,c);
        if ((a>60) || (b>60) || (c>60)) {
          console.log('vvedi chisla pravilno'); 
          ochkiIgroka();
        }
    }  

function sumOchkov(){
    return a+b+c;
}   

function play(teamName) {
    let result = {};

    ochkiIgroka();
    let sumI1=sumOchkov();
    console.log(`Summa ochkov ${teamName}I1 ${sumI1}`);
    
    ochkiIgroka();
    let sumI2=sumOchkov();
    console.log(`Summa ochkov ${teamName}I2 ${sumI2}`);
    
    ochkiIgroka();
    let sumI3=sumOchkov();
    console.log(`Summa ochkov ${teamName}I3 ${sumI3}`);

    if ((sumI1>sumI2) && (sumI1>sumI3)){
        console.log('pobedil K1I1');
        result.player = 'I1';
        result.points = sumI1;
    } 
    else if ((sumI2>sumI1) && (sumI2>sumI3)){
        console.log('pobedil K1I2');
    } else {
        console.log('pobedil K1I3');
    }

    return result;
}



if ((sumK1I1>sumK1I2) && (sumK1I1>sumK1I3)){
    console.log('pobedil K1I1');
} 
else if ((sumK1I2>sumK1I1) && (sumK1I2>sumK1I3)){
    console.log('pobedil K1I2');
} else {
    console.log('pobedil K1I3');
}