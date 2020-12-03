let q 
let s
let e

do {
    q = +prompt(' Введите число ступеней');
}while(
    isNaN(q) || q <= 0
)

do {
    s = prompt(' Введите символ отступов');
}while(
    s == " "
)
do {
    e = prompt(' Введите конечный символ');
}while(
    e == " "
)

for(let i = 0; i < q; i++){
    console.log(e);
    e = s + e
}
