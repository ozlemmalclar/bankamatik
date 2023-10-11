let kullaniciAdi = "ali";
let sifre = "123";
let bakiye =500000;

$(".loginbtn").click(function(){
    let girilenKullaniciAdi = $(".kadi").val();
    let girilensifre = $(".sifre").val();

    if(girilenKullaniciAdi == kullaniciAdi && girilensifre == sifre){
        alert("doğrulama tamam hoşgeldin" + kullaniciAdi);
        alert("1-PARA ÇEK 2-PARA YATIR 3-KREDİ ÇEK");

        let yapilacakİslem = Number(prompt("yapmak istediğinizişlemi numaralandırın "));
        if(yapilacakİslem ==1){
            alert("hesabınızdaki olan bakiye" + bakiye);
            let cekilmekİstenenTutar = Number(prompt("ne kadar çekmek istersiniz "));

            if(cekilmekİstenenTutar <= bakiye){
                let kalanTutar = bakiye - cekilmekİstenenTutar ;
                alert("cekilen tutar : " + cekilmekİstenenTutar + "hesapta kalan bakiye " + kalanTutar);

            }
            else if(cekilmekİstenenTutar > bakiye ){
                 alert(" bakiyenizden fazla bir tutar talep ettiniz ");

            }
           
        }
        if(yapilacakİslem == 2){
            alert("hesabınızda olan bakiye" + bakiye);
            let yatirilmakİstenenTutar = Number(prompt("ne kadar para yatırmak istiyorsunuz"));
            kalanTutar = yatirilmakİstenenTutar + bakiye;
            alert("para yatırıldı hesanızdaki toplam tutar:" + kalanTutar);

        }
        else if(yapilacakİslem ==3){
            alert("hesabınızda olan bakiye" + bakiye);
            let cekilmekİstenenKredi = Number(prompt("ne kadar kredi çekmek istiyorsunuz"));
            let krediÖdenecekTutar = cekilmekİstenenKredi * 0.18 + cekilmekİstenenKredi;
            let aylikKrediOdemesi = krediÖdenecekTutar / 12;
            alert("faizli ödenecek tutar:" + krediÖdenecekTutar + " " + "/12 ay/ ayda ödenecek tutar" + aylikKrediOdemesi.toFixed(2));

        }

    }
    else{
        alert("kullanıcı adı veya şifren hatalı");

    }
})
