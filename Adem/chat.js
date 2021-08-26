const npcMsg = [
    "Tja, är du upptagen?",
    "Det är svinkallt..!😂",
    "Höst är fan skit! 🌬️",
    "Finns inte plats hos dig? Jag kan inte låna soffan? 🙏",
    "Känner ingen på 35:an eller Nord.."

];

const pcMsg = [
    "Hurså? Soffsurfar du, lr? 😉",
    "Ingen plats kvar på 35:an eller Station Nord, då?",
    "Är du nedanför?",
    "Tänker att vi går till 35:an tsm 🥰"

]

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
    }, 4000);
    console.log("Loaded chat");

  }, 2000);


const unityBtns = document.querySelector("canvas");
let npsBubleCounter = 1;
let PcBubleCounter = 0;

unityBtns.addEventListener('click', (e) =>{
    console.log(e.clientX);
    console.log(e.clientY);


    if(e.clientX > 354 && e.clientX < 666){
        if(e.clientY > 400 && e.clientY < 475){
            console.log("clicked btn1");
            msgBar.click();
            if(PcBubleCounter <= 4){

                addPcMsg(pcMsg[PcBubleCounter]);
                PcBubleCounter++;
            }
            else{
                
            }
            if(npsBubleCounter <5){
                
                addNpcMsg(npcMsg[npsBubleCounter], 3000);
                npsBubleCounter++;
            }
            
            
            console.log({npsBubleCounter});
            if(npsBubleCounter == 2 || npsBubleCounter == 4){
                addNpcMsg(npcMsg[npsBubleCounter], 6000);
                npsBubleCounter++;
                console.log("bonus:"+npsBubleCounter);
            }
            // if(PcBubleCounter == 3){
            //     addPcMsg(pcMsg[PcBubleCounter]);
            //     PcBubleCounter++;
            // }
            
            
        }
        else if(e.clientY > 485 && e.clientY < 555){
            console.log("clicked btn2");
        }
    }
})

