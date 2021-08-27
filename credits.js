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
    articleTitle.textContent = 'Oscar Wilhelmsson , Game Programmer'
    articleTxt.textContent = `
    Jag är en av två programmerare och har programmerat grunden i Unity. Det har bland annat innefattat att jag i samverkan med mina kollegor utvecklat användargränssnittet samt flödet i vår interaktiva upplevelse. Den största utmaningen för mig har främst varit att lösa interaktionen mellan Unity (WebGL) och HTML/JavaScript när vi fått upp det på webben. Utöver själva kodningen har jag varit delaktig i storylines och formuleringar. 

    +46(0)704 938072 
    `;
    articleInfo.setAttribute('href', 'mailt:karloscarwilhelmsson@gmail.com');
    articleInfo.textContent = "Kontakt";
});

mf.addEventListener('click', function(){
    console.log('clicked mf');
    articleTitle.textContent = 'Julia Sigurdhsson, Manusförfattare'
    articleTxt.textContent = `
    Jag har skrivit storyline och manus och arbetat fram karaktärer och spelarens roll tillsammans med UX designer. Tanken var att ge spelaren möjligheten att sätta sig in i karaktärernas miljöer/situationer, genom ledtrådar försöka förstå vad historierna handlar om, utan att förklara för mycket.
    `;
    articleInfo.setAttribute('href', '');
    articleInfo.textContent = "";
});

ux.addEventListener('click', function(){
    console.log('clicked ux');
    articleTitle.textContent = 'Jon Karlström, UX - designer'
    articleTxt.textContent = `
    Jag har varit delaktig i idégenereringsprocessen och skapandet av prototyping wireframes i programvaran figma i syfte att testa klickbar prototyp. Har arbetat tätt tillsammans med manusarbetet för att dels komma på idéer för stories, dels för att iterativt testa hur användare upplever de stories som skapats.
    `;
    articleInfo.setAttribute('href', 'mailto:onkar2010@skola.goteborg.se');
    articleInfo.textContent = "Kontakt";
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

