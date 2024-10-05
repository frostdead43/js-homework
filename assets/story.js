let adventurerName = prompt("İsmini yaz!");

let adventurerPower = Math.floor(Math.random() * (10 - 6 + 1)) + 6;

let bandits = "Haydutlar";

let banditPower = Math.floor(Math.random()* 6);

let path1 = prompt("Tüm gün boyunca at sürdüğün için kendini yorgun hissediyorsun. Uzaklarda bir köyden dumanlar çiktigini gördün. Bu senin için dinlenme firsati olabilir. Köye dogru atini sürmek istiyor musun? ")

if (path1 === "evet") {
    console.log("köye dogru ilerlemeye karar verdin. Köye yaklastikca bir seylerin ters gittiğini anliyorsun. Atin huysuzlanmaya basladi. Köye girdiginde harsilastigin manzara korkunc. Yikilmis evler, üst üste yigilmis ceset yiginlari bu köyün ne hale geldiğini sana gösteriyor. Köyün meydaninda asilmis yasli bir adam var. Bu adam köyün lideri olmali. Ölmeden önce iskence görmüs. Vücudunda bicak yaralari var. Bu yaralar canavarlar tarafindan yapilmisa benzemiyor. Köyün icinde canli belirtisi var mi diye inceliyorsun. Köyün arkalarinda bagirisma sesleri duyuyorsun. Silahini yanina alip seslerin oldugu bölgeye gitme karari aldin!")

    path1_2 = prompt("Seslerin geldigi yöne geldiginde bu köyün neden bu hale geldigini anliyorsun. Haydutlar! Haydutlar önünde genc bir kiza saldiriyor. 'Bir tanesi seni farkediyor: Sayimiz fazla. Bela istemiyorsan buradan uzaklas!' Genc kiz yardim istercesine sana bakiyor, ne yapacaksin?`");

    if (path1_2 === "saldir") {
        if (adventurerPower > banditPower) {
                console.log("Son haydutu katlettiginde ölmeden önce sana bakiyor." + `Seni hatirladim, sen ${adventurerName} 'sin. Haydutun göz bebekleri yavas yavas büyürken sen de genc kizin iyi oldugunu düsünüp atina dogru ilerliyorsun. Köyden ayrilip sehre dogru yola cikiyorsun. Umarim yolda yiyecek bulabilirsin`);
        }else if (banditPower >= adventurerPower) {
                console.log("Ne kadar güclü olsan da haydurlarin sayisi karsisinda bir sansin kalmiyor.");
        }else 
            alert("gecersiz hamle");

    } else if (path1_2 === "saldirma") {
        console.log ("Kendini düsünmek zorundasin. Dünya acimasiz. Genc kizi kaderiyle başbaşa birakiyorsun Köyden ayriliyorsun" );
    } else 
        alert("Lütfen gecerli bir hamle yap!")

} else if (path1 === "hayir") {

    console.log("Atini kuzeye ceviriyorsun. Şehre ulasmana az kalmis olabilir. Şu an dinlenmenin sirasi değil!");

    path2_2 = prompt("sehre geldin. Çok aç ve yorgun hissediyorsun. Tam bir han bulmuşken kapida bir adam sana mektup uzatiyor. Mektupta Horadrim kardesliginin seni cagirdigi yaziyor. Biraz dinlenmek mi yoksa Horadrim'in davetini kabul etmek mi istersin? ")
    
    if(path2_2 === "dinlen") {
        console.log("Dinlenmenin iyi bir fikir oldugunu düsünüp en yakin han'a giriyorsun. Sonraki gün icin oyun kaydediliyor :D ");
    }else if (path2_2 === "git") {
        console.log ("Mektupta yazili olan yere gidiyorsun. Seni karsilayan içlerindeki en yasli kişi oluyor." + `hosgeldin ${adventurerName} burada neden oldugunu anlamis olmalisin. Öncelikle kendimi tanitayim. Ben Methem, Horadrim üyelerindenim. Uzun süredir diğer üyelerden bazi seylerin ters gittiği hakkinda rapor aliyoruz. Kücük bir sehrin ansizin kayboldugu bilgisine ulastik. Üyelerimizden iki kisi göndermemize rağmen geri dönmediler. Korktugumuz senaryo basimiza gelmiş olabilir. Gök haritasi felaketi gösteriyor` );
        path3 = prompt ("Senin bizim icin bir ekip üyemiz ile bu kaybolan sehre gitmeni istiyoruz. Bunun karsiliginda cömertce ödüllendirileceksin. Kabul etmezsen ve korktugumuz senaryo basimiza gelirse bu durumdan pismanlik duyacagina eminim. İçindeki merak ve Methem'in bu sözlerinden sonra kaybolmus sehre gitme karari aliyorsun")
        if(path3 === "yola cik") {
            console.log("yola cikmak icin atini ve silahlarini hazirliyorsun, biraz dinlenip horadrim üyesi ile birlikte yola cikiyorsun")
        } else (alert("hikaye ilerlemesi icin tek secenek 'yola cik' "))

    }
        

} else {
    alert ("Lütfen gecerli bir hamle yap!")
} 


