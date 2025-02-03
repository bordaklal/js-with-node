let number = false
let Cnumber = Number(number)

//console.log(Cnumber)
//console.log(typeof Cnumber)

//In Number Conversion Out-put
    //"5abc"  => Nan, "" => 0
    //null => 0, undefined => NaN
    //{} => NaN, [] => 0
    //true => 1, false => 0

    let val = {}
    let boolVal = Boolean(val)
    
    //console.log(boolVal)
    //console.log(typeof boolVal)

//In boolean conversion out-put   
    //0 => false, 1 => true
    //"" => false, "mahaveer" => true
    //null => false, undefined => false
    //[] => true, {} => true

    let str = {name:'ram'}
    let strVal = String(str)
    
    //console.log(strVal)
    //console.log(typeof strVal)

//In string conversion out-put
//33 => 33

//null => null, undefined => undefined
//[] => "", [1, 2] => 1, 2
//{} => [object object], {name:'ram'} => [object, object]


/**************operrations**************/

let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(23%2)
// console.log(8**200)

// console.log('1' + 2);
// console.log(2 + "5");
// console.log("1" + 5 + 6);
// console.log(5 + 5 + "1");

//console.log((2+5) * 3 % 5) // 1

//console.log(+true); // 1
//console.log(-true); // -1
//console.log(+""); // 0

let p = 10
let q = --p

console.log(p, q);







