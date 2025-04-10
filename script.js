1.
var matn = prompt("Ismingiz nima:");
var uzunlik = matn.length;
alert("Siz " + uzunlik + " ta belgi yozdingiz");

2.
var ism = prompt("Ismingiz nima?");
var sevinchDev = ism[0].toUpperCase() + ism.slice(1).toLowerCase();
alert("Salom, " + sevinchDev + "!");

3.
var itYoshi = prompt("Itingiz nechi yoshda?");
var mushukYoshi = (itYoshi * 6) + 5;
alert("Agar itingiz mushuk bo‘lganida " + mushukYoshi + " yoshda bo‘lardi");


4. Foydalanuvchi haqida qisqacha ma'lumot
var ism2 = prompt("Ismingiz nima?");
var yosh = prompt("Yoshingiz nechida?");
var tarif = prompt("O‘zingiz haqida qisqacha yozing:");
console.log("Salom, mening ismim " + ism2 + ", yoshim " + yosh + " da. Mana men haqimda qisqacha: " + tarif);

5.
 Parol tekshirish (5 ballik qiyin topshiriq)
var parol = prompt("Parol kiriting (kamida 8ta belgi, 1ta katta harf, 1ta raqam, 1ta maxsus belgi bo‘lsin):");

var uzunmi = parol.length >= 8;
var kattaHarfBormi = parol.match(/[A-Z]/);
var raqamBormi = parol.match(/[0-9]/);
var maxsusBelgimi = parol.match(/[@!#$%^]/);

if (uzunmi && kattaHarfBormi && raqamBormi && maxsusBelgimi) {
  alert("Parolingiz kuchli! Ishlatishingiz mumkin!");
} else {
  alert("Parol noto‘g‘ri!");
}







