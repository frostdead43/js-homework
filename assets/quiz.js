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

if (quiz5 === "43" || quiz5 === "45" )  {
    alert("Dogru, 20 yil gecti...");
    rightAnswer += 1;

}else {

    alert("Yanlis, cevap '43 ve 45'. Karahanli sadakatinizi takdir etmiyor!");
    wrongAnswer += 1;
}

//6.soru

quiz6 = prompt ("Dolunayimi + basarken yaktim diyen bir oyuncu hangi oyunu oyundan bahsediyordur?");

if (quiz6.toLowerCase() === "metiniki" || quiz6.toLowerCase() === "metin2" )  {
    alert("Dogru, Demirci alnini silerken + bas yanmaz");
    rightAnswer += 1;

}else {

    alert("Yanlis, 'Cevap flappy birds?!' ");
    wrongAnswer += 1;
}

//7.soru

quiz7 = prompt ("3 büyüklere gelmiş en cirkef futbolcudan birini söyleyin");

if (quiz5.toLowerCase() === "melo" || quiz5.toLowerCase() === "emre belözoğlu" || quiz5.toLowerCase() === "caner erkin" ||quiz5.toLowerCase() === "hasan şaş" )  {
    alert("Dogru");
    rightAnswer += 1;

}else {

    alert("Yanlis");
    wrongAnswer += 1;
}


// 8.soru 

quiz8 = prompt ("Gibi dizisinde ilkkan  karakterinin soyadi nedir ? ");

if (quiz8.toLowerCase() === "yedinci" )  {
    alert("Dogru, İlkkan Yedinci ya da biz ona kuki de diyebiliriz");
    rightAnswer += 1;

}else {

    alert("Yanlis, 'yedinci (7th)' ");
    wrongAnswer += 1;
}

//9.soru

quiz9 = prompt ("Yüksek sadakat grubu isimlerinin aksine kaç adet solist degistirmiştir");


if (quiz9 === "4" )  {
    alert("Dogru, 4 solist degistirdiler. Güncel solistleri 'Kenan Vuraldir' ");
    rightAnswer += 1;

}else {

    alert("Yanlis, 4,4,4,4 ");
    wrongAnswer += 1;
}


//10.soru

let quiz10 = prompt("Nihat ve Orhan Hocalar candir degil mi? (tek cevap <3)");

if (quiz10 === "<3" )  {
    alert("Kral hocalar, seviyoruz <3");
    rightAnswer += 1;

} else if (quiz10 === "evet") {
    alert("Kral hocalar, seviyoruz <3");
    rightAnswer += 1;
    
} else if (quiz10 === "tabiki") {
    alert("Kral hocalar, seviyoruz <3");
    rightAnswer += 1;

} else if (quiz10 === "soru mu simdi bu?") {
    alert("Kral hocalar, seviyoruz <3");
    rightAnswer += 1;

} else if (quiz10 === "Ofc we are!") {
    alert("Kral hocalar, seviyoruz <3");
    rightAnswer += 1;

} else if (quiz10 === " :) ") {
    alert("Kral hocalar, seviyoruz <3");
    rightAnswer += 1;

} else if (quiz10 === " はい ") {
    alert("Kral hocalar, seviyoruz <3");
    rightAnswer += 1;

} else if (quiz10 === " hayir ") {
    alert("Savciliga verildiniz!!");
    wrongAnswer += 1;
}



console.log(rightAnswer);

console.log(wrongAnswer);


if (rightAnswer > 10) {
    alert("Ben yapamadim 10 tane vallahi bravo");
    window.location.href = "https://www.youtube.com/watch?v=jAWU-YXJnhM";  //bu kod maalesef chatgpt den arak 
    console.log(rightAnswer);

} else if (rightAnswer >=6 && rightAnswer<10) {
    alert("Güzel sonuc. Bence güzel");
    window.location.href = "https://www.youtube.com/watch?v=tY-PT0ND0uk";
    console.log(rightAnswer);

} else if (rightAnswer >=4 && rightAnswer<6) {
    alert("Vasatin üstü");
    window.location.href = "https://www.youtube.com/watch?v=MVROBI-MHhY";
    console.log(rightAnswer);

} else if (rightAnswer >=1 && rightAnswer<4)  {
    alert("Tadim tuzum yok, bunadlim..");
    window.location.href = "https://www.youtube.com/watch?v=GPwyJz5Yt8U";
    console.log(rightAnswer);

}else if (rightAnswer === 0) {
    alert("Bari son soruyu dogru yapsaydin..");
    window.location.href = "https://www.youtube.com/watch?v=nQsSkEDe7_M";
    console.log(rightAnswer);
}
