const textarea=document.querySelector("textarea");
const button=document.querySelector("button");
let isspeaking=true
const texttospeech=()=>{
    const synthesis=window.speechSynthesis;
    const text=textarea.value;
    if(!synthesis.speaking && text){
    const utternace=new SpeechSynthesisUtterance(text);
    synthesis.speak(utternace);
    }

    if(text.length > 50){
        if(synthesis.speaking && isspeaking){
            button.innerText="Pause"
            synthesis.resume();
            isspeaking=false;
        }
        else{
            button.innerText="Resume to Play"
            synthesis.pause();
            isspeaking=true;
        }
    }
    else{
        isspeaking=false;
        button.innerText="Convert to Speech"
    }
    setInterval(()=>{
        if(!synthesis.speaking && !isspeaking){
            button.innerText="Convert to Speech"
            // synthesis.pause();
            isspeaking=true;
        }
    })
}
button.addEventListener("click",texttospeech);