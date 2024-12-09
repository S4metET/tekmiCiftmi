let sayilar = [];
for (let i = 0; i < 10; i++){
    let input = prompt(`Lütfen ${i + 1}. sayıyı girin`);
    sayilar[i] = input;
}

let teksayilar = [];
let ciftsayilar = [];

for (let i = 0; i < sayilar.length; i++){
    if(sayilar[i] % 2 === 0){
        ciftsayilar.push(sayilar[i]);
    }
    else{
        teksayilar.push(sayilar[i]);
    }
}

console.log(teksayilar);
console.log(ciftsayilar);