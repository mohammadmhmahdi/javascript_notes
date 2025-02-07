const salary = 2500;
const isBCS =true;
const height = 60;
const hasCar = true
// if (salary > 20000 && height > 66){
//     console.log('su---------patro');
// }
// else{
//     console.log('onno patro khuji')
// }

if(salary > 25000 || height > 72){
    console.log('eso baba kobul');
}
else{
    console.log('vhag tui mokbul')
}

//more and more condition
if(salary > 25000 || height > 72 || isBCS ==  true){
    console.log('eso baba kobul');
}
else{
    console.log('vhag tui mokbul')
}
//------------Complex Condition ----------------
if((salary <25000 && hasCar == true) ||isBCS==true ){
    console.log('shu----------------patro')
}
if((salary <25000 || hasCar == true) && isBCS==true ){
    console.log('shu----------------patro')
}
