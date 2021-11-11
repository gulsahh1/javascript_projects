// let boolean;
// const isBooleanTrue=boolean? true:false;
// console.log(isBooleanTrue)
// >>false
// console.log(boolean)

// function printScreen1(params) {
//     console.log("İlk ekran cıktısı");
// }

// function printScreen2(params) {
//     setTimeout(function(){
//         console.log("ikinci ekran cıktısı") // 3 fonksiyonda  asenkron yapıda
//     },3000);
// }

// function printScreen3(params) {
//     console.log("üçüncü ekran cıktısı")
// }
// printScreen1();
// printScreen2();
// printScreen3();

// function printScreen1(params) {
//     console.log("İlk ekran cıktısı");
// }

// function printScreen2(callback1,callback2){
//     setTimeout(function(){
//         callback1()
//         console.log("ikinci ekran cıktısı")
//         callback2();
//     },3000);
// }

// function printScreen3(params) {
//     console.log("üçüncü ekran cıktısı")
// }

// printScreen2(printScreen1,printScreen3);

// function mesajVer(params) {
//     alert("Hello world!")
// }
// mesajVer();

// function mesajVer(ad,soyad) {
//     alert(`Merhaba  ${ad} ${soyad}`)
// }
// mesajVer("Gülşah","Şahin");


// const carpim= (sayi1,sayi2) => sayi1*sayi2;
// console.log(carpim(3,5));

// let experience=prompt("Kaç yıllık iş tecrübeniz var?",4)

// const developer=
//  experience >=4
//    ? () => alert("Bircok konuyu biliyorum")
//    : () => alert("Hiçbir şey bilmiyorum");

//    developer();


//    let toplam=(a,b)=>{
//        let result=a+b;
//        return result;
//    };
//    toplam(3,5);

// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }

//     return result;
//   }
//   alert(pow(2, 3)); // 8
// // recursion ile
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// alert(pow(2, 3)); // 8


// function pow(x, n) {
//     return n == 1 ? x : x * pow(x, n - 1);
//   }

// function programDetayi(bootcamp, organizasyon) {
//     // nested yardımcı fonk
//     const tumProgram = () => bootcamp + ' ' + organizasyon;
  
//     console.log('Basladi, ' + tumProgram());
//     consol.log('Bitti, ' + tumProgram());
//   }
//////////////////////////////////////////////////////////

// function sayacartir() {
//     let sayac = 0;
  
//     return function () {
//       return sayac++;
//     };
//   }
  
//   let counter = makeCounter();
  
//   console.log(sayacartir()); // 0
//   console.log(sayacartir()); // 1
//   console.log(sayacartir()); // 2
/////////////////////////////////////////////////////////

// function Question(hobby) {
//     switch (hobby) {
//       case "car":
//         return function (name) {
//           console.log(name + " do you have a car ?");
//         };
//         break;
  
//       case "book":
//         return function (name) {
//           console.log(name + " what is your favorite author?");
//         };
//         break;
  
//       case "software":
//         return function (name, type) {
//           console.log(name + " are you interested in " + type + "?");
//         };
//         break;
  
//       default:
//         return function (name) {
//           console.log(name + "  how are you ?");
//         };
//         break;
//     }
//   }
  
//   var softwareQuestion = Question("software");
//   softwareQuestion("Cemre","nodejs");
//////////////////////////////////////////////////////////////////

// let movie={
//   name: "la la land",

//   thisInArrow:()=>{
//     console.log("Movie name is" + this.name); // 'this' window u referens gösterir ve çalışmaz
//   },

//   thisInRegular(){ 
//     console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
//   }
// };

// movie.thisInArrow(); // output : Movie name is
// movie.thisInRegular(); // output : Movie name is La la land

//////////////////////////////////////////////////////////////////////////////

// // 1 -  Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların hervbirini 1'den başlayarak alt alta yazalım.

// const seriList = list => {

//   list.forEach((series,index) => {
//     console.log(`${index+1} ${series}`)
//   });
// };

// seriList(["Firefly", "The Mandalorian","Breaking Bad"]);

// /////////////////////////////////////////////////////////////////////////

// // 2 - [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array döndürsün. Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.

// const newArray = nums =>{
    
//   const newNums = nums.map(e=>{      
//     if(e%2==0){
//         return e*2
//     }else if(e%2==1){
//         return e*3
//     }
// });
// return newNums 

// }
// console.log(newArray([1,2,3,4,5]));  // output: [3,4,9,8,15]

// ///////////////////////////////////////////////////////////////////////

// let info=document.querySelector("#info")
//  info.addEventListener("click",domClick)

//  function domClick() {
   
//       console.log(tıklandı);
//       console.log(this.innerHTML="TIKLANDIGI İÇİN BİLGİ DEGİŞTİ");
//  }


let counter=0;
let counterDOM=document.querySelector("#counter")
let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector("#decrease")

counterDOM.innerHTML=counter;

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent);

function clickEvent() {
  console.log(this.id);
  this.id =="increase"? counter+=1:counter -=1
  counterDOM.innerHTML=counter;
 
}
  
