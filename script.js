let randomize = document.getElementById('randomize');
let go = document.getElementById('go');
let details = document.getElementById('details');
let info = document.getElementById('info');
let info2 = document.getElementById('info2');
let count = 0;
let bar = 0;

const about = document.getElementById('about');

details.addEventListener('click', () => {
	info2.classList.toggle('visible');
})

about.addEventListener('click', () => {
	switch (bar) {
    case 0:
	randomize.style.display = 'none';
	go.style.display = 'none';
	details.style.display = 'none';
	info.style.display = 'none';
	info2.style.display = 'none';
	about_text.classList.add('visible2');
	bar ++;
	break;
    case 1:
	randomize.style.display = 'inline-block';
	go.style.display = 'inline-block';
	details.style.display = 'inline-block';
	info.style.display = 'block';
	info2.style.display = 'block';
	about_text.classList.remove('visible2');
	bar --;
	break;	
	}
})

randomize.addEventListener('click', () => {
	count = Math.floor(Math.random() * 220 + 1);
	switch (count) {
	case 1:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=lQS8U3Xpw7k');
	info2.innerHTML = '5 Uskomatonta paikkaa maailmassa';
	break;	
	case 2:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=lEP-qi0hzkg');
	info2.innerHTML = '5 Uskomatonta paikkaa maailmassa #2';
	break;	
	case 3:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=m3CgnX969nY');
	info2.innerHTML = '5 Hämmästyttävää UFO-videota';
	break;	
	case 4:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=49EfGcYZdX8');
	info2.innerHTML = 'Atlantiksen kadonnut kaupunki on löydetty?';
	break;	
	case 5:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=TzZJZ1mJOAM');
	info2.innerHTML = 'Oudot urheilulajit!';
	break;	
	case 6:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Mux4N66aiSs');
	info2.innerHTML = 'Värjää hiukset kasveilla | Emma ja Milla testaa';
	break;	
	case 7:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=_u0U0AhplRY');
	info2.innerHTML = 'JASMIN maalaa GRAFFITIN';
	break;	
	case 8:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=wBQCWURsjU0');
	info2.innerHTML = 'Pelasin golfia elämäni ensimmäistä kertaa!';
	break;	
	case 9:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=80xJEcsnqqs');
	info2.innerHTML = 'Korjaan huonot slimet! ep. 7';
	break;		
	case 10:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=7LnRcK2TBWM');
	info2.innerHTML = '10 erilaista opiskelijaa!';
	break;	
	case 11:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=NM5k3Rg1pVM');
	info2.innerHTML = 'Synttäri My Day #17! 😱 // Vuokrasin Sviitin!';
	break;	
	case 12:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=25Q4sLQ16v0');
	info2.innerHTML = 'STYLE SWAP w/pinkkupinsku';
	break;	
	case 13:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=-jE_YN7-KlA');
	info2.innerHTML = 'SISUSTUSKORNERI: Kodin esittely';
	break;	
	case 14:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=obMzn6uXOow');
	info2.innerHTML = 'Näin Teet Smoothie Bowlin';
	break;	
	case 15:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=N8-1KiqoiV4');
	info2.innerHTML = 'Mun Päivä Koulussa (Lakko)';
	break;	
	case 16:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Mu6PrVcY6z4');
	info2.innerHTML = 'Markku Alén & Lamborghini Urus';
	break;	
	case 17:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ab8DeC0s1fY');
	info2.innerHTML = 'Markku Alén & Polaris RMK 800';
	break;	
	case 18:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=JUGF3M6dCN0');
	info2.innerHTML = 'Tasa-arvoisissa risteyksissä — Nettiauto';
	break;	
	case 19:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ORw4ItK_RyY');
	info2.innerHTML = 'SAFKAA: Lapsiperheen viikon ruoat 😋';
	break;		
	case 20:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=mHp2_vhjR0Q');
	info2.innerHTML = 'Maapähkinävoi-kaurakeksit!';
	break;	
	case 21:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=YZrH-LkruMU');
	info2.innerHTML = 'Testataan vanhoja skeittitemppuja';
	break;	
	case 22:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=HAJFfaiGg4c');
	info2.innerHTML = 'Geneven autonäyttelyn uutuudet (Teknavi 2017)';
	break;	
	case 23:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=wqasPNZd3uU');
	info2.innerHTML = 'Hyvän mielen metsäkävely – Kesä';
	break;	
	case 24:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=-spzCqcQWec');
	info2.innerHTML = 'Syysseikkailu 2018 Norjassa ja Ruotsissa';
	break;	
	case 25:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=0qSQ3aV2ucU');
	info2.innerHTML = 'Miksi tämä vesipuisto on rakennettu VUOREN huipulle?';
	break;	
	case 26:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=B5emNVG3t68');
	info2.innerHTML = 'Todella hyvä kuntoinenko autiotalo?';
	break;	
	case 27:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ge5IYDcwXb0');
	info2.innerHTML = 'Löydettiin HYLÄTTY TEHDAS keskeltä KAUPUNKIA!';
	break;	
	case 28:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=r8LOlxaBCik');
	info2.innerHTML = 'Huuhkajien historiallinen matka EM-kisoihin | Finland\'s road to EURO 2021';
	break;	
	case 29:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=jtSUVzARc5w');
	info2.innerHTML = 'U20 MM-puolivälierä 2019: Kanada - Suomi | Maalikooste';
	break;		
	case 30:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=OdFPOvkpsok');
	info2.innerHTML = 'Silja Line goes Tubekoulu – Kapteenin tubevideo';
	break;	
	case 31:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=P7o1HH-1K70');
	info2.innerHTML = 'Vauva Opettelee Konttaamaan 👶🏻🤙🏻 — Perheilta';
	break;	
	case 32:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=d1y-JX8KPeE');
	info2.innerHTML = 'Taaperon Ensimmäinen Hiustenleikkaus – PERHEVLOGI';
	break;	
	case 33:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=xC46ezX_Maw');
	info2.innerHTML = 'Himmeli | DIY | Tee se itse';
	break;	
	case 34:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=7h2FupOUJmg');
	info2.innerHTML = 'Ohje: Joutsen origami';
	break;	
	case 35:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=CcAJrDl83n4');
	info2.innerHTML = 'Ohje: Modulaarinen kuutio';
	break;	
	case 36:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=EXWbgToo1X4');
	info2.innerHTML = 'Welcome to the Lappeenranta campus – LUT University';
	break;	
	case 37:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=mzOFSsGI2WY');
	info2.innerHTML = 'Kampuselämää Jyväskylän yliopistossa - University campus life at JYU';
	break;	
	case 38:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=eOBi9kaeQ3A');
	info2.innerHTML = 'Mistä kesätöitä löytää? | Näin onnistut työnhaussa';
	break;	
	case 39:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=OfJYDiXoLnk');
	info2.innerHTML = 'Tramppapuistossa ja vegemessuilla';
	break;		
	case 40:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=oLAyDKhD7ko');
	info2.innerHTML = 'Poliisikoulussa';
	break;		
	case 41:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=_QCKpbFllDc');
	info2.innerHTML = 'Viisi Android vinkkiä - Näin käytät puhelintasi yksinkertaisemmin';
	break;	
	case 42:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ADLmB-9Goiw');
	info2.innerHTML = 'Super clean Lian-Li O11 RGB build';
	break;	
	case 43:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ufWsjxB6bqM');
	info2.innerHTML = 'IT-tukihenkilöksi I REDU';
	break;	
	case 44:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=3Iif71ZUoS0');
	info2.innerHTML = 'Koodataan Nettisivut | Miskan Ohjelmointinurkka';
	break;	
	case 45:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=XRvb5kb9Lx4');
	info2.innerHTML = 'Miten julkaista omat verkkosivut';
	break;	
	case 46:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=4bV4hseiFpk');
	info2.innerHTML = 'Millaista on raitiovaununkuljettajan arki?';
	break;	
	case 47:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=N2pcNMX9Yeo');
	info2.innerHTML = 'Suomalaisia pienoisjunia Märklin radalla!';
	break;	
	case 48:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=4o8Sa2z_Rkg');
	info2.innerHTML = 'Turun tuomiokirkko 1400-luvulla';
	break;	
	case 49:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=fAcdiueB27o');
	info2.innerHTML = 'Punavuori ennen ja nyt';
	break;		
	case 50:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ILoQry0YNzc');
	info2.innerHTML = 'Päivä Helsingin Liikenteessä';
	break;	
	case 51:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=iEEgC_L4xCU');
	info2.innerHTML = 'Aki Louhela – Neiti Etsivä';
	break;	
	case 52:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=dWUkLvDacgI');
	info2.innerHTML = 'Alwari Tuohitorvi – Sinun Laulusi';
	break;		
	case 53:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=YX67bpqgeCA');
	info2.innerHTML = 'Ami Aspelund – Sinilintu';
	break;	
	case 54:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Jm2xWQFE6f8');
	info2.innerHTML = 'Anssi Kela – Aamu';
	break;
	case 55:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=6sf9vsDQKiI');
	info2.innerHTML = 'Arja Koriseva – Tuulen Värit';
	break;		
	case 56:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=o3vJEN7CBlk');
	info2.innerHTML = 'Baltix – Kauniita Sanoja';
	break;	
	case 57:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=VpHeGakHmRM');
	info2.innerHTML = 'Dino Mansik - Ihmeellinen Timantti';
	break;	
	case 58:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=QSSCVlpNNSY');
	info2.innerHTML = 'Dino Mansik – Iso Ja Tuntematon';
	break;	
	case 59:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ploNjv_-_Ok');
	info2.innerHTML = 'Dino Mansik - Taivaalta On Tähdet Kadonneet';
	break;	
	case 60:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=TsJXVpbcsSU');
	info2.innerHTML = 'Eetu Floor – Purjehtija';
	break;	
	case 61:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=0v1yMH8q4CQ');
	info2.innerHTML = 'Egotrippi – Elokuu';
	break;	
	case 62:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=8cYeJ2uMwtg');
	info2.innerHTML = 'Egotrippi – Fantastiset Bileet';
	break;	
	case 63:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=r8L0j4E0zXw');
	info2.innerHTML = 'Egotrippi – Hei Sinä';
	break;	
	case 64:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=-wuhP8axNQA');
	info2.innerHTML = 'Evelina – Asfalttiviidakko';
	break;	
	case 65:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=5ZqXts7_mzs');
	info2.innerHTML = 'Haloo Helsinki – Sinisissä Valoissa';
	break;	
	case 66:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=I0HexOPFSRc');
	info2.innerHTML = 'Herra Ylppö & Ihmiset – Videovuokraamon Tyttö';
	break;	
	case 67:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ZHDkb5G8MI4');
	info2.innerHTML = 'Ilpo Kaikkonen – Kiitoradanpää';
	break;	
	case 68:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=FrSHzSGxh8s');
	info2.innerHTML = 'Reino Nordin – Ylös';
	break;	
	case 69:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=7JzPRehD118');
	info2.innerHTML = 'Robin – 3d-lasit';
	break;	
	case 70:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=3PcgRT-dgQM');
	info2.innerHTML = 'Sanni – Mä En Haluu Mennä Himaan';
	break;	
	case 71:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=zWi8QrIn9tI');
	info2.innerHTML = 'Helsinki | Real 8K';
	break;	
	case 72:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=4J4xLwgX23c');
	info2.innerHTML = 'Weekend In The Woods Vlog';
	break;	
	case 73:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=xrG7POGqrR8');
	info2.innerHTML = 'Make Your Houseplants Thrive';
	break;	
	case 74:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Fj4v_OtNsuU');
	info2.innerHTML = 'Lappeenranta 4K Bird`s Eye view DJI Phantom 3 Pro';
	break;	
	case 75:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=djjEIexTTjI');
	info2.innerHTML = 'Lakes! Flying Over Finland 4K Drone';
	break;		
	case 76:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=GHDtG4_Eq_c');
	info2.innerHTML = 'Expedia. Philadelphia Travel Guide';
	break;	
	case 77:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=s1XoYkn3osE');
	info2.innerHTML = 'Expedia. Barcelona Travel Guide';
	break;	
	case 78:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=TszSjE_kQwg');
	info2.innerHTML = 'Evolution of Television 1920-2020 (updated)';
	break;	
	case 79:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=9fJEFi3ccwI');
	info2.innerHTML = 'Expedia. Yosemite National Park Travel Guide';
	break;	
	case 80:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=B2utb9iav2o');
	info2.innerHTML = 'Student room tour at Aalto Campus';
	break;	
	case 81:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=okZmnB3Hhb4');
	info2.innerHTML = 'A new Bose–Einstein condensate created at Aalto University';
	break;	
	case 82:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=SSo_EIwHSd4');
	info2.innerHTML = 'Blockchain Simply Explained';
	break;	
	case 83:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=DxUsrnd3VWY');
	info2.innerHTML = 'Boston 4K Drone';
	break;	
	case 84:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=tqQnBzFAt8I');
	info2.innerHTML = 'The Strangest Towns In The World';
	break;	
	case 85:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=FCPdIvXo2rU');
	info2.innerHTML = 'The Alps 4K Video';
	break;	
	case 86:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=EDfWLui5Xhg');
	info2.innerHTML = 'HD France From Above';
	break;	
	case 87:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=-7frMv9zT6w');
	info2.innerHTML = 'HD New York From Above';
	break;	
	case 88:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=96hl5J47c3k');
	info2.innerHTML = 'Abstract Art Case';
	break;	
	case 89:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ACkmg3Y64_s');
	info2.innerHTML = 'Miniatur Wunderland Official Video';
	break;	
	case 90:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=VCzrDN4jmVs');
	info2.innerHTML = 'Cool Manhattan NYC Street Painter';
	break;	
	case 91:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=tZGDCC4J2Zs');
	info2.innerHTML = 'A Day In An American Private School';
	break;		
	case 92:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=822yxGSEK84');
	info2.innerHTML = '10 Real Unbelievable Images';
	break;	
	case 93:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=PVT7uXzIJWc');
	info2.innerHTML = 'Top 5 Trippy Motion Art Exhibits';
	break;	
	case 94:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=p3QEzXKQuTk');
	info2.innerHTML = 'Top 5 Unusual Buildings';
	break;	
	case 95:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=6PxMBgbwuFo');
	info2.innerHTML = 'Top 100 Car Brands | Largest Car Company in the world - 2022';
	break;	
	case 96:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=qO1brxn1rNs');
	info2.innerHTML = '15 Cool Accidental Inventions';
	break;	
	case 97:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=hssSf2x2cRg');
	info2.innerHTML = 'Top 10 Interesting Facts About Jupiter';
	break;	
	case 98:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=j_Y2Gwaj7Gs');
	info2.innerHTML = 'Tour Red Hat\'s New Boston Office';
	break;	
	case 99:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=BG3eAR1ngeg');
	info2.innerHTML = 'Insider. Massive Bookstore Rarities';
	break;	
	case 100:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=WmiCv9rNWqw');
	info2.innerHTML = 'The Fake Town Created By Google';
	break;	
	case 101:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=cOW7DUrphoQ');
	info2.innerHTML = 'Insider. 6 Best Places With Cheese In London';
	break;	
	case 102:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=NXwuJlY3uy0');
	info2.innerHTML = 'Insider. Volcanic Lava Bread In Iceland';
	break;	
	case 103:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=nTpR1QayngU');
	info2.innerHTML = 'Planet Unknown (2016) Short Film';
	break;	
	case 104:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=TOSFmKy2fKA');
	info2.innerHTML = 'Insider. Spray Paint To Fake Neon Signs';
	break;	
	case 105:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=4pI62A0aSbg');
	info2.innerHTML = 'Insider. Marble Art Design';
	break;	
	case 106:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Ju3LWnOkgcs');
	info2.innerHTML = 'Cologne Plane Spotting';
	break;	
	case 107:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=PBbZ_0-tUH0');
	info2.innerHTML = 'Best of URBAN Skating - POWERSLIDE Inline Skates';
	break;		
	case 108:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=i-qIOC7wQEQ');
	info2.innerHTML = 'Boston & NYC Subway Competition';
	break;	
	case 109:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=PTH6boMUk8s');
	info2.innerHTML = 'Top Gear – Chris Harris vs. Honda Civic Type R';
	break;	
	case 110:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=U75MZwtDCXA');
	info2.innerHTML = 'Container Ship Cargo Operations';
	break;	
	case 111:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=_Nq4Z5i7lcs');
	info2.innerHTML = 'Stanford University Campus Tour';
	break;	
	case 112:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=BV1vQBxi44E');
	info2.innerHTML = 'Top ten UEFA EURO 2016 goals';
	break;	
	case 113:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=M6PTJptKZhI');
	info2.innerHTML = 'Aeroscape Engineering';
	break;	
	case 114:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=7rMgpExA4kM');
	info2.innerHTML = 'How Airplanes Are Made';
	break;	
	case 115:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=I-EIVlHvHRM');
	info2.innerHTML = 'A. I. Art Creation';
	break;	
	case 116:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=zR3Igc3Rhfg');
	info2.innerHTML = 'To Scale. The Solar System';
	break;	
	case 117:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=DDmz9iqyeSU');
	info2.innerHTML = 'Sailing a Superboat Across the Atlantic';
	break;	
	case 118:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=SZ_sQaWn0Uo');
	info2.innerHTML = 'Futuristic Greenhouse Visit';
	break;	
	case 119:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=V29-HvFLOzQ');
	info2.innerHTML = 'Behind The Scenes Of Our Planet. Narwhal';
	break;	
	case 120:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=RtU8nBnpFVE');
	info2.innerHTML = 'Wings Animated Movie';
	break;	
	case 121:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=mwzExNYs12Y');
	info2.innerHTML = 'Amazing Science Toys/Gadgets (4)';
	break;	
	case 122:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=xYe4-7I5ot0');
	info2.innerHTML = 'Amazing Optical Illusions';
	break;	
	case 123:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=LtoBzOMwlRQ');
	info2.innerHTML = 'Amazing Science Toys/Gadgets/Inventions (9)';
	break;		
	case 124:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=5Rqj6rfbMIY');
	info2.innerHTML = 'Top Gear – Chris Harris Drives The 400bhp Lotus Emira';
	break;	
	case 125:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Bcz39w07WIA');
	info2.innerHTML = 'Colored Epoxy Resin Table';
	break;	
	case 126:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=enpkJE-7Dkc');
	info2.innerHTML = 'How To Grow Coral';
	break;	
	case 127:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=T5DuYSXRqGc');
	info2.innerHTML = '3857 W 31st Ave, Vancouver, BC - Bryan Velve';
	break;	
	case 128:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=sKT80lPjQ8Y');
	info2.innerHTML = 'Dream Home Music Studio';
	break;	
	case 129:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ToUmmVvqKHo');
	info2.innerHTML = '40 Creative Photography Ideas';
	break;	
	case 130:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=PW8tr4j1ZWE');
	info2.innerHTML = 'Beginner Photography Mistakes';
	break;	
	case 131:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=TgqeRTwZvIo');
	info2.innerHTML = 'What Is UI vs. UX Design?';
	break;	
	case 132:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=1PnVor36_40');
	info2.innerHTML = 'CSS Tutorial';
	break;	
	case 133:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=y17RuWkWdn8');
	info2.innerHTML = 'DOM Manipulation Tutorial';
	break;	
	case 134:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=libKVRa01L8');
	info2.innerHTML = 'Solar System 101 Video';
	break;	
	case 135:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=epZdZaEQhS0');
	info2.innerHTML = 'Saturn 101 Video';
	break;	
	case 136:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Ddq8YLwcscA');
	info2.innerHTML = 'The First American Lighthouse';
	break;	
	case 137:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=fb9npsayAjg');
	info2.innerHTML = 'Building Good Habits';
	break;	
	case 138:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=PL2j9MbvgH8');
	info2.innerHTML = 'Ford vs. Ferrari';
	break;	
	case 139:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=XGA2LAb25hs');
	info2.innerHTML = 'Airbnb\'s Most Requested Listing Ever';
	break;		
	case 140:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Boi0XEm9-4E');
	info2.innerHTML = 'Utrecht Planning';
	break;	
	case 141:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=gj6frb_mHzQ');
	info2.innerHTML = 'Aquarius Undersea Laboratory Tour';
	break;	
	case 142:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=dcxyE0WboFI');
	info2.innerHTML = 'Paris Metro Video Guide';
	break;	
	case 143:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=qtPi0JvmWbs');
	info2.innerHTML = 'Generative Art';
	break;	
	case 144:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=otoP8puJzKY');
	info2.innerHTML = 'Wicker Pavilion';
	break;	
	case 145:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=lWAhwGpRl58');
	info2.innerHTML = 'Introduction To Spanish In 30 Minutes';
	break;	
	case 146:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=UE661QWlBtE');
	info2.innerHTML = 'Constructing Floating Homes';
	break;	
	case 147:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Ax8fNpglBSY');
	info2.innerHTML = 'Small Bedroom Makeover';
	break;	
	case 148:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=GybxfjrVro4');
	info2.innerHTML = 'Pinterest Inspired Kitchen';
	break;	
	case 149:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Av07QiqmsoA');
	info2.innerHTML = 'Lemonade Machine';
	break;	
	case 150:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=sBoVGqiSzr4');
	info2.innerHTML = 'Calligraphy & Hand Lettering Tutorial';
	break;	
	case 151:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=6RkWqu3aHHI');
	info2.innerHTML = 'How Was It Made? Micromosaics';
	break;	
	case 152:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=73D0AwDuzZ0');
	info2.innerHTML = 'Brussels Train World';
	break;	
	case 153:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=q9ZI6N86b50');
	info2.innerHTML = 'Expo 67. The Canadian Pavilion';
	break;	
	case 154:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=RFcGvmFtR-s');
	info2.innerHTML = 'Rise Lantern Festival';
	break;	
	case 155:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=T8fzAtwtGuM');
	info2.innerHTML = 'Warsaw Jazz It Flash Mob';
	break;		
	case 156:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=d77p2Cg1q1Y');
	info2.innerHTML = 'NYC Subway Saxophone Band';
	break;	
	case 157:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=jY9kIpaC3uw&t=0s');
	info2.innerHTML = 'Thomas Kruger & Brendan Kavanagh. Fast Boogie Woogie';
	break;	
	case 158:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=5apLdW0lL08');
	info2.innerHTML = 'Frisco Percussion';
	break;	
	case 159:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=9TjUWnAK0cg');
	info2.innerHTML = 'Easier Pan Pizza';
	break;	
	case 160:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Blb9la-SE1k');
	info2.innerHTML = 'Easy Chocolate Lace Lollipops';
	break;	
	case 161:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=o-FyH2A7Ed0');
	info2.innerHTML = 'IBM Quantum Sounds';
	break;	
	case 162:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=0qo78R_yYFA');
	info2.innerHTML = 'SpaceX Interplanetary Transport System';
	break;	
	case 163:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=TZ0HsN-tblo');
	info2.innerHTML = 'Model S Touchscreen Display';
	break;	
	case 164:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Q3ur8wzzhBU');
	info2.innerHTML = 'Internet Of Things';
	break;	
	case 165:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=SL_E2q3RSLE');
	info2.innerHTML = 'M8 Convertible';
	break;	
	case 166:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=oInBvtQASqw');
	info2.innerHTML = 'ACG Presents : The Search';
	break;	
	case 167:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ktqOPSeybNo');
	info2.innerHTML = 'ACG Presents : An Impractical Camping Guide';
	break;	
	case 168:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=a_4hVIWaa_8');
	info2.innerHTML = 'Elevators : Raising The Roof Since 1854';
	break;	
	case 169:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=HGtMta8vpbg');
	info2.innerHTML = 'Before And After. Buildings Reinvented';
	break;	
	case 170:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=D-4-8IcoZBk');
	info2.innerHTML = 'Pavillion Le Corbusier';
	break;	
	case 171:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=hr9KR6t_mEM');
	info2.innerHTML = 'Barcelona Pavilion';
	break;		
	case 172:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=UO3N_PRIgX0');
	info2.innerHTML = 'The Magic Of Making Sound';
	break;	
	case 173:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=3SwX8ANq7Ls');
	info2.innerHTML = 'The California Roll';
	break;	
	case 174:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=YThelfB2fvg');
	info2.innerHTML = 'Mouse Cursor History';
	break;	
	case 175:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ww12lImOJ38');
	info2.innerHTML = 'Image File Formats';
	break;	
	case 176:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=2LOkI3Xyd_E');
	info2.innerHTML = 'Is Your Internet Fast Enough?';
	break;	
	case 177:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=oQ0mp4wLBMg');
	info2.innerHTML = '7 Ways To Increase Intelligence';
	break;	
	case 178:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=rdlXC2WEJcc');
	info2.innerHTML = '7 Nice Conversation Starters';
	break;	
	case 179:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=YeI6Wqn4I78');
	info2.innerHTML = 'Color Theory Basics';
	break;	
	case 180:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=10N_PbBMfn0');
	info2.innerHTML = 'Full Room Design';
	break;	
	case 181:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=FWZp3dho3i4');
	info2.innerHTML = 'Interior Photography Shooting';
	break;	
	case 182:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=a4N4yQB_B4c');
	info2.innerHTML = 'Where Two Oceans Meet';
	break;	
	case 183:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=o1zNIm8GVPY');
	info2.innerHTML = 'I\'m Not A Robot';
	break;	
	case 184:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=n2ut_ylP8Gk');
	info2.innerHTML = 'Adobe XD Interactive Menu';
	break;	
	case 185:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=zleBGbwZjqU');
	info2.innerHTML = 'Color An Illustration In Photoshop';
	break;	
	case 186:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=9dKhClrYMQc');
	info2.innerHTML = 'Satisfying Chateau Restorations';
	break;	
	case 187:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=6m85MPciuyw');
	info2.innerHTML = 'Ingenious Floating Homes';
	break;		
	case 188:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ZiRYewGkl-E');
	info2.innerHTML = 'DIY Platform Bed';
	break;	
	case 189:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=330YCLMDaRg');
	info2.innerHTML = 'Documentary – Nordic Service Design';
	break;	
	case 190:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=GwsKPtngklM');
	info2.innerHTML = 'Universiy of Helsinki Vlog';
	break;	
	case 191:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=HFd2lVfrwL8');
	info2.innerHTML = 'Dayglow – Deep End';
	break;	
	case 192:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ArBD_VHIY8Q');
	info2.innerHTML = 'Dayglow – Stops Making Sense';
	break;	
	case 193:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=O7S21zudhtY');
	info2.innerHTML = 'Zedd feat. Ryan Tedder – Lost At Sea';
	break;	
	case 194:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=9bX97Hgb6IY');
	info2.innerHTML = 'Ed Sheeran – The City';
	break;	
	case 195:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=-8YV5xhENt8');
	info2.innerHTML = 'Dua Lipa – Homesick';
	break;	
	case 196:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=m7Bc3pLyij0');
	info2.innerHTML = 'Marshmello ft. Bastille – Happier';
	break;	
	case 197:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=kiDlwknFOrI');
	info2.innerHTML = 'Surfaces – Shine On Top';
	break;	
	case 198:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=oJH1Cdw-Plw');
	info2.innerHTML = 'Surfaces – Take It Easy';
	break;	
	case 199:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=uSNHveS_GZw');
	info2.innerHTML = 'VINAI - On N On (feat. Leony)';
	break;	
	case 200:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=JA2TPK0NeFI');
	info2.innerHTML = 'Italobrothers – Stamp On The Ground';
	break;	
	case 201:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=Y4QGPWLY-EM');
	info2.innerHTML = 'Eiffel 65 – Blue';
	break;	
	case 202:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=to5Sg2KeEnU');
	info2.innerHTML = 'Maroon 5 – Sunday Morning';
	break;	
	case 203:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=iSEkI3Urmd4');
	info2.innerHTML = 'Harry Potter Homecoming Assembly';
	break;		
	case 204:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=B7xai5u_tnk');
	info2.innerHTML = 'TheFatRat – Monody (feat. Laura Brehm)';
	break;	
	case 205:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=krcaX7RL0OI');
	info2.innerHTML = 'Lastep – Come To Life';
	break;	
	case 206:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=YJ5fRzTJvS4');
	info2.innerHTML = 'Lemonade Mouth – Somebody';
	break;	
	case 207:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=tBU-F_lSTac');
	info2.innerHTML = 'Calvin Harris – Neon Rocks';
	break;	
	case 208:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=jofNR_WkoCE');
	info2.innerHTML = 'Ylvis – The Fox (What Does The Fox Say?)';
	break;	
	case 209:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=mk48xRzuNvA');
	info2.innerHTML = 'The Script – Hall Of Fame';
	break;	
	case 210:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=qP-7GNoDJ5c');
	info2.innerHTML = 'Nathan Evans – Wellerman';
	break;	
	case 211:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=0dcbw4IEY5w');
	info2.innerHTML = 'ABBA – Thank You For The Music';
	break;	
	case 212:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=dDI7x1nwTUw');
	info2.innerHTML = 'ABBA – Eagle';
	break;	
	case 213:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=TbksX8Pnw_c');
	info2.innerHTML = 'Herreys – Diggi-Loo, Diggi-Ley (English Version)';
	break;	
	case 214:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=B2z7Iy2NCgQ');
	info2.innerHTML = 'Perry Como – The Colors Of My Life';
	break;	
	case 215:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=VCYQ8V1kHUc');
	info2.innerHTML = 'Magnus Bokn – Over The Sea';
	break;	
	case 216:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=ra68T96ONNU');
	info2.innerHTML = '4 Strings – Forever Young';
	break;	
	case 217:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=9fbxTFevdAE');
	info2.innerHTML = 'Aloe Blacc – Green Lights';
	break;	
	case 218:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=pIkK4uYLP9A');
	info2.innerHTML = 'Janji – Shine';
	break;	
	case 219:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=bIfGCnbFuF8');
	info2.innerHTML = 'Obie Hans – Opaque Silhouettes';
	break;		
	case 220:
	go.setAttribute('href', 'https://www.youtube.com/watch?v=pAWFbaY1hUA');
	info2.innerHTML = 'Obie Hans – Midnight Motif';
	break;	
	}
});
