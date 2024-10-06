let rightAnswer = 0;

let wrongAnswer = 0;


//1.soru

quiz1 = prompt ("2 + 2 = ? sadece yanlis cevap!");

if(quiz1 === "5") {
    alert("dogru");
    rightAnswer+= 1;
}else {

    alert("yanlis, dogru cevap 5 :D")
    wrongAnswer+= 1;
}

//2.soru

quiz2 = prompt ("Bir zamanlar güçlü bir insan kralligi olan ve Valar'a karşi isyan ettikten sonra okyanusun derinliklerine batan Orta Dünya şehrinin adi nedir?");

if (quiz2.toLowerCase() === "numenor")  {
    alert("dogru, Istari. Elenion Ancalima!");
    rightAnswer += 1;

}else {

    alert("Yanlis, cevap 'Numenor', karanliklar efendisinin hizmetkari!");
    wrongAnswer += 1;
}



//3.soru

quiz3 = prompt ("Akasya duragi dizisinde Sinan Kaya 174 bölüm boyunca toplam kaç kez kacilirmistir?");

if (quiz3 === "62")  {
    alert("Dogru, tirin tirin trininin");
    rightAnswer += 1;

}else {

    alert("Yanlis, cevabi bilmiyorsan 174 bölüm Akasya duragi izle!");
    wrongAnswer += 1;
}

//4.soru

quiz4 = prompt ("Kolay bir soru. Fatih Terim sicil numarasi?");

if (quiz4 === "7446")  {
    alert("Dogru, Neyin ne olduğunu, nelerin ne hangi durumlar? Başka yerlerde ben gizli gündemim yok benim.");
    rightAnswer += 1;

}else {

    alert("Yanlis, '7446' Söyleyecek başka hiç bir kelimem yok. O kadar sinirli ve moralim bozuk yani. Hiç tadim yok yani.");
    wrongAnswer += 1;
}



//5.soru

quiz5 = prompt ("Kurtlar vadisi dizisinde Süleyman Cakir kacinci bölümde vurulmus, kacinci bölümde ölmüştür?");

if (quiz5 === "43" || "45" )  {
    alert("Dogru, 20 yil gecti...");
    rightAnswer += 1;

}else {

    alert("Yanlis, cevap '43 ve 45'. Karahanli sadakatinizi takdir etmiyor!");
    wrongAnswer += 1;
}

//6.soru

quiz6 = prompt ("Dolunayimi + bassarken yaktim diyen bir oyuncu hangi oyunu oyundan bahsediyordur?");

if (quiz5.toLowerCase() === "metin2" )  {
    alert("Dogru, Demirci alnini silerken + bas yanmaz");
    rightAnswer += 1;

}else {

    alert("Yanlis, 'Cevap flappy birds?!' ");
    wrongAnswer += 1;
}

//7.soru

quiz7 = prompt ("3 büyüklere gelmiş en cirkef futbolcudan birini söyleyin");

if (quiz5.toLowerCase() === "melo" || "emre belözoğlu" || "caner erkin" || "hasan şaş" )  {
    alert("Dogru");
    rightAnswer += 1;

}else {

    alert("Yanlis");
    wrongAnswer += 1;
}

console.log(rightAnswer);

console.log(wrongAnswer);

