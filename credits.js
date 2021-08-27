const yrgo = document.querySelector(".yrgo-btn");
const rm = document.querySelector(".rm-btn");
const ga = document.querySelector(".ga-btn");
const gp = document.querySelector(".gp-btn");
const mf = document.querySelector(".mf-btn");
const ux = document.querySelector(".ux-btn");
const wu = document.querySelector(".wu-btn");

const articleTitle = document.querySelector("article h2");
const articleTxt = document.querySelector(".paper p");
const articleInfo = document.querySelector('.contact-info');
console.log(yrgo);

yrgo.addEventListener('click', function(){
    window.open("https://yrgo.se", '_blank');
});

rm.addEventListener('click', function(){
    console.log('clicked rm');
    window.open("https://raddningsmissionen.se/", '_blank');
});

ga.addEventListener('click', function(){
    console.log('clicked ga');
    articleTitle.textContent = 'Robin Ekström, Graphical Artist'
    articleTxt.textContent = `
    Det är jag som ligger bakom detta projekts visuella aspekt och design såsom mobilen, layout, färgvalen och ikonerna. Med hjälp av gruppens feedback och åsikter sammanslog vi en visuell kommunikation vi är nöjda med inom den tidsramen vi arbetade i.
    Samt deltog jag i idégenerering för att hjälpa gruppen att ta fram ett intuitivt sätt att visa tre olika historier om hur man kan hjälpa de mer utsatta i samhället, samt hur man snabbt hittar till Yrgo och Räddnigsmissionens hemsidor.
    Robin.Ekstrom95@hotmail.com
    `;
    articleInfo.setAttribute('href', 'https://www.artstation.com/european_robin');
    articleInfo.textContent = "Portfolio";
});

gp.addEventListener('click', function(){
    console.log('clicked gp');
});

mf.addEventListener('click', function(){
    console.log('clicked mf');
});

ux.addEventListener('click', function(){
    console.log('clicked ux');
});

wu.addEventListener('click', function(){
    console.log('clicked wu');
    articleTitle.textContent = 'Joacim "Joey" Johansson, Webbutvecklare'
    articleTxt.textContent = `
    Det är jag som ligger bakom att sidan finns online.
    Jag har sammanställt alla delar producerade av mina duktiga kollegor och kombinerat det till
    en digital produkt. Mina utmaningar har mest handlat om att samspel mellan Unity och WebGL med
    HTML och JS för webben. Utöver detta har jag jobbat på att försöka få in någon form av animationer
    för att ge en lite bättre inlevelse. Hade jag haft mer tid, hade det säkert kunnat bli ännu bättre.
    `;
    articleInfo.setAttribute('href', 'mailto:joeyjay@joeyjaydigital.com');
    articleInfo.textContent = "Kontakta";
    console.log(articleTitle.textContent);
    console.log(articleTxt.textContent)
});

