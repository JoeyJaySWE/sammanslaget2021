chatHistory.scrollTop = chatHistory.scrollHeight - chatHistory.clientHeight;


const backBtn = document.querySelector('.backBtn');
backBtn.addEventListener('click', function() {
  
  window.location.replace('https://under-samma-himmel.netlify.app/');
})


const msgBar = document.querySelector('#messageBar');

msgBar.addEventListener('click', function() {
    
  let chatHeight = chatHistory.offsetHeight;
  let msgBarStyle = window.getComputedStyle(msgBar);
  let msgBarPos = msgBarStyle.transform;
 
  
  
  
//   console.log(msgBarPos); // (1, 0, 0, 1, 0, 350)
//   console.log(chatHeight);
if(PcBubleCounter < 4){
    

  if(chatHeight === 450){
      chatHistory.style.height = "175px";
      msgBar.style.transform = "translateY(210px)";
    //   console.log(chatHistory.offsetHeight);
      updateScroll(chatHistory);

  }
  else if(chatHeight == 195){
      chatHistory.style.height = "430px";
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
    donation.style.transform = 'translateX(-50%) translateY(780px)';
}
})

function updateScroll(elmentPan){
    setTimeout(()=>{

        elmentPan.scrollTop = elmentPan.scrollHeight;
    }, 600);
}

