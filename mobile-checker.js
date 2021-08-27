if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)){
     

    //  const cureentSite = window.location.href;
    
 
//  console.log("test");
console.log(window.location.href);

switch (window.location.href){
    case "http://127.0.0.1:5500/index.html":
        window.location.replace('https://mobil-under-samma-himmel.netlify.app/');
        break;
    case "http://127.0.0.1:5500/anton35/index.html":
        window.location.replace('https://mobil-under-samma-himmel.netlify.app/anton35/index.html');
        break;
    case "http://127.0.0.1:5500/maria-och-solrosen/index.html":
        window.location.replace('https://mobil-under-samma-himmel.netlify.app/maria-och-solrosen/index.html');
        break;
    case "http://127.0.0.1:5500/adem/index.html":
        window.location.replace('https://mobil-under-samma-himmel.netlify.app/adem/index.html');
        break;
    case "http://127.0.0.1:5500/credits.html":
        window.location.replace('https://mobil-under-samma-himmel.netlify.app/credits.html');
        break;

}
}
