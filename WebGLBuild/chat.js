const npcMsg = [
    "Tja, är du upptagen?",
    "<p class='npc-bubble' style='width: 100px;'>Det är svinkallt..!&#128514;</p>",
    "<p class='npc-bubble' style='width: 100px;'>Höst är fan skit! &#127788;</p>",
    "<p class='npc-bubble' style='width: 20px;'>Finns inte plats hos dig? Jag kan inte låna soffan? &#128591;</p>",
    "<p class='npc-bubble' style='width: 20px;'>Känner ingen på 35:an eller Nord..</p>"

];

const pcMsg = [
    "<p class='pc-bubble' style='width: 40px;'>Hurså? Soffsurfar du, lr? &#128521;</p>",
    "<p class='pc-bubble'>Ingen plats kvar på 35:an eller Station Nord, då?</p>",
    "<p class='pc-bubble'>Är du nedanför?</p>",
    "<p class='pc-bubble'>Tänker att vi går till 35:an tsm &#129392;</p>"

]

const npcBuble = document.createElement("P");
npcBuble.classList.add("npc-bubble");



function addNpcMsg(msg){
    setTimeout(() => {

        chatHistory.insertBefore(msg, msgBar);
        let 
      }, 1000);
}

setTimeout(() => {
    let firstMsg = npcBuble;
    firstMsg.innerText = npcMsg[0];
    chatHistory.insertBefore(firstMsg, msgBar);
    firstMsg = document.querySelector(".chat-history p:first-child");
    setTimeout(() =>{
        firstMsg.style.transform = 'translateY(0px)';
    }, 4000);
    console.log("Loaded chat");

  }, 2000);


