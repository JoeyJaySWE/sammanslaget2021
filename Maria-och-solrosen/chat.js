const npcMsg = [
    `Hej! Supertack! William har haft
    såå kul! Underbart att se honom så
    med sina vänner 🥰`,
    `Han längtar redan tillbaks`,
    `Förhoppningsvis kan vi alla tre
    vara med då`,
    `Jag vill ju att de ska ha kontakt
    och sedan ni började vara med
    känner jag att det någon gång kan
    bli så 🌻`,
    `Han vill inte prata om det alls`,
    `Men jättetack för det här i alla
    fall!! Hoppas vi ses på lägret
    nästa år med! 🌻
    ❤️`

];

const pcMsg = [
    `Hej, Maria! Jättekul att
    höra!`,
    `Hur går det för er under
    besöken?`,
    `Pratar han något med honom
    under besöken?`,
    `Ge det tid. Han öppnar sig
    snart 🌻`,
    `Det hoppas jag också!!
    🌻 Och glöm inte
    julfirandet i år!`


]
msgBar.addEventListener('click', function() {
    
    let chatHeight = chatHistory.offsetHeight;
    let msgBarStyle = window.getComputedStyle(msgBar);
    let msgBarPos = msgBarStyle.transform;
   
    
    
    
  //   console.log(msgBarPos); // (1, 0, 0, 1, 0, 350)
  //   console.log(chatHeight);
  if(PcBubleCounter < 5){
      
  
    if(chatHeight === 450){
        chatHistory.style.height = "175px";
        msgBar.style.transform = "translateY(210px)";
      //   console.log(chatHistory.offsetHeight);
        updateScroll(chatHistory);
  
    }
    else if(chatHeight == 175){
        chatHistory.style.height = "450px";
      //   console.log({chatHeight});
        msgBar.style.transform = "translateY(453px)";
        updateScroll(chatHistory);
  
    }
    else{
      console.log('unkown offset: '+chatHeight);
    }
  }
  else{
      const donation = document.querySelector(".donation-buble");
      donation.style.transform = 'translateX(-50%) translateY(1420px)';
  }
  })

const npcBuble = document.createElement("P");
npcBuble.classList.add("npc-bubble");



const messageWrap = document.querySelector("#msgs");


function addNpcMsg(msg, delay=200){
    updateScroll(chatHistory);
    setTimeout(() => {
        let bubble = document.createElement("P");
        bubble.classList.add("npc-bubble");
        bubble.innerText = msg;
        messageWrap.append(bubble);
        messageWrap.lastChild.style.transform = 'translateY(0px)';
      }, 2000);
    setTimeout(() => {

        updateScroll(chatHistory);
    }, delay);
}

function addPcMsg(msg){
    setTimeout(() => {
        updateScroll(chatHistory);
        let bubble = document.createElement("P");
        bubble.classList.add("pc-bubble");
        bubble.innerText = msg;
        messageWrap.append(bubble);
        messageWrap.lastChild.style.transform = 'translateY(0px)';
      }, 1000);
}

setTimeout(() => {
    let firstMsg = npcBuble;
    firstMsg.innerText = npcMsg[0];
    messageWrap.append(firstMsg);
    firstMsg = document.querySelector("#msgs p:first-child");
    setTimeout(() =>{
        firstMsg.style.transform = 'translateY(0px)';
        updateScroll(chatHistory);
    }, 4000);
    console.log("Loaded chat");

  }, 2000);


const unityBtns = document.querySelector("canvas");
let npsBubleCounter = 1;
let PcBubleCounter = 0;

function makeShield(){
    if(!document.querySelector('.shield')){

        let shielded = document.createElement('img');
        shielded.src = '../assets/shield.png';
        shielded.classList.add('shield');
        let unityWrap = document.querySelector('#unity-container');
        unityWrap.append(shielded);
        
    }
}



unityBtns.addEventListener('click', (e) =>{
    console.log(e.clientX);
    console.log(e.clientY);
    let dim = e.target.getBoundingClientRect();
    let posX = e.clientX - dim.left;
    let posY = e.clientY - dim.top;
    console.log({posX});
    console.log({posY});

    if(posX > 40 && posX < 351){
        console.log("right size");
        if(posY> 270 && posY < 335){
            console.log("clicked btn1");
            if(document.querySelector('.shield')){
                let shielded = document.querySelector('.shield');
                shielded.remove();
            }
            msgBar.click();
            if(PcBubleCounter <= 5){

                addPcMsg(pcMsg[PcBubleCounter]);
                PcBubleCounter++;
            }
            else{
                
            }
            if(npsBubleCounter <6){
                
                addNpcMsg(npcMsg[npsBubleCounter], 3000);
                npsBubleCounter++;
            }
            
            
            console.log({npsBubleCounter});
            if(npsBubleCounter == 2){
                addNpcMsg(npcMsg[npsBubleCounter], 6000);
                npsBubleCounter++;
                console.log("bonus:"+npsBubleCounter);
            }
            // if(PcBubleCounter == 3){
            //     addPcMsg(pcMsg[PcBubleCounter]);
            //     PcBubleCounter++;
            // }
            
            
        }
        else if(posY> 348 && posY < 420){
            console.log("clicked btn2");
            makeShield();
        }
        else{
            console.log("unkown X:"+posX+"\n unkown Y:"+posY);
        }
    }
})

function updateScroll(elmentPan){
    setTimeout(()=>{

        elmentPan.scrollTop = elmentPan.scrollHeight;
    }, 600);
}

