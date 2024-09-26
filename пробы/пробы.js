let a=prompt('kto tam?','');
if (a=='admin'){
    let b=prompt('vvedi parol','');
    if(b=='glavnij'){
        alert('zdravstvyi');
    } else if (b=='' || b==null){
        alert('otmena');
    } else{
        alert('nevernij parol');
    }
}   else if (a=='' || a==null){
    alert('otmeneno');
} else {
    alert('i dont know you');
}


