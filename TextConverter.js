let speakBtn = document.querySelector('.container .speak-btn');
let textarea = document.querySelector('.container textarea');

let speechText =()=>{
  let speech = new SpeechSynthesisUtterance();
  speech.lang = 'en-US';
  speech.text = `${textarea.value}`;
  speech.rate = 0.9;
  speech.volume = 1;
  speech.pitch = 1;
  speechSynthesis.speak(speech);
}

speakBtn.addEventListener('click',()=>{
  if(textarea.value != ''){
     speechText();   
  }else{
    alert('Please enter text!')      
  }    
}) 
