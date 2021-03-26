import "./profil.css";

export default function Profil(){
return(
    <div id="container">
    <div id="header"><h1><a href="index.html">Web Sayfası Geliştirici</a></h1></div>
    <div id="wrapper">
    <div id="content">
      <fieldset>
        <legend>Eğitim Geçmişi</legend>
        <table>
          <thead>
            <tr>
              <th>OKUL</th>
              <th>SENE</th>
              <th>NOT</th>
              <th>SEHİR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Besiktas ilkokulu</td>
              <td>1991</td>
              <td>4/5</td>
              <td>İstanbul</td>
            </tr>
            <tr>
              <td>Ankara Orta Okulu</td>
              <td>1998</td>
              <td>5/5</td>
              <td>Ankara</td>
            </tr>
            <tr>
              <td>İzmir Fen Lisesi</td>
              <td>2003</td>
              <td>60/100</td>
              <td>İzmir</td>
            </tr>
            <tr>
              <td>Orta Dogu Teknik Üniversitesi</td>
              <td>2008</td>
              <td>3.2</td>
              <td>Ankara</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <fieldset>
        <legend>Çalışma geçmişi</legend>
        <table>
          <thead>
            <tr>
              <th>Firma</th>
              <th>Pozisyon</th>
              <th>Çalışma Aralığı</th>
              <th>SEHİR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X Firması</td>
              <td>Proje Müdürü</td>
              <td>2009-2011</td>
              <td>Ankara</td>
            </tr>
            <tr>
              <td>Y Firması</td>
              <td>Yazılımcı</td>
              <td>2011-2013</td>
              <td>Ankara</td>
            </tr>
            <tr>
              <td>Z Firması</td>
              <td>Teknik İşçi</td>
              <td>2013-2016</td>
              <td>İzmir</td>
            </tr>
            <tr>
              <td>T Firması</td>
              <td>Temizlikçi</td>
              <td>2016-2018</td>
              <td>İzmir</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <fieldset>
        <legend>Aile</legend>
        <table>
          <thead>
            <tr>
              <th>Çocuk</th>
              <th>Yaş</th>
              <th>Cinsiyet</th>
              <th>Okul</th>
              <th>Hobileri</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ali</td>
              <td>12</td>
              <td>E</td>
              <td>Lise</td>
              <td>Satranç</td>
            </tr>
            <tr>
              <td>Deniz</td>
              <td>20</td>
              <td>K</td>
              <td>Universite</td>
              <td>Voleybol</td>
            </tr>
            
          </tbody>
        </table>
      </fieldset>
      <fieldset>
        <legend>Hobilerim</legend>
        <table>
          <thead>
            <tr>
              <th>Hobi</th>
              <th>Yer</th>
              <th>Haftalık Harcanan Süre</th>
              <th>Hangi günler</th>
              <th>Yıllık ücreti</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beyzbol</td>
              <td>Antrenman Sahası</td>
              <td>5 Saat</td>
              <td>Pazartesi/Salı</td>
              <td>540</td>
            </tr>
            <tr>
              <td>Basketbol</td>
              <td>Salon</td>
              <td>10 Saat</td>
              <td>Cuma-Cumartesi</td>
              <td>280</td>
            </tr>
            <tr>
              <td>Satranç</td>
              <td>Klüp</td>
              <td>6 Saat</td>
              <td>Perşembe</td>
              <td>Ücretsiz</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  </div>
  <div id="navigation">
    <nav>
    <p><strong>Metin TUZLALI</strong></p>
    <img id="p-img" src="./image/profil.jpg" alt="Profil Resmi">
    <ul>
      <li><a href="#"><img class="i-cons" src="./image/icon/facebook.png" alt="facebook">facebook</a></li>
      <li><a href="#"><img class="i-cons" src="./image/icon/instagram.png" alt="instagram">instagram</a></li>
      <li><a href="#"><img class="i-cons" src="./image/icon/email.png" alt="email">E-mail</a></li>
      <li><a href="#"><img class="i-cons" src="./image/icon/linkedin.png" alt="linkedin">linkedin</a></li>
      <li><a href="#"><img class="i-cons" src="./image/icon/twitter.png" alt="twitter">twitter</a></li>
    </ul>
  </nav>
  </div>
  <div id="extra">
    <p><strong>Hakkımda</strong></p>
    <p><span class="kirmizi"> Dr. Metin TUZLALI</span>, 1986 yılında İstanbul'da doğdu. 
      2004 yılında <span class="altcizik">Özel Bilgi Lisesi</span>'ni birincilikle tamamladı. 
      2008 yılında Marmara Üniversitesi İletişim Fakültesi Radyo, 
      <span class="baskin">Televizyon ve Sinema Bölümü</span>'nü de birincilikle bitirdi. 
      Bu zaman dilimi içerisinde çeşitli medya kuruluşlarında çalıştı. 
      2009 yılında Marmara Üniversitesi İletişim Fakültesi Radyo, 
      Televizyon ve Sinema Bölümü'nde Araştırma Görevlisi olarak
      akademik hayatına başladı. 2010 yılında "Televizyon Yayın Teknolojisi"
      adlı yüksek lisans tezini tamamladı. 
      Aynı yıl içerisinde Marmara Üniversitesi Radyo, Televizyon Dalı'nda
      doktora eğitimine başladı.</p>
  </div>
  <div id="footer">
    <p><span id="footerp">Copyright &copy; Metin TUZLALI</span></p>
  </div>
</div>
)
}