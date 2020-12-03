    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let index2 = randomizer(arrayLength);
        let woord2 = werkwoord[index2];
        let index3 = randomizer(arrayLength);
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["death", "humans", "hell", "satan"];
    const werkwoord = ["is", "are", "is", "is"];
    const restwoord = ["near", "weak ", "down below", "here"];
        
    let plaatjes = ["https://image.shutterstock.com/z/stock-vector-cute-devil-in-doodle-style-143354992.jpg", "https://thumbs.dreamstime.com/z/creative-rainbow-gradient-line-drawing-cartoon-fire-demon-original-153133574.jpg", "https://64.media.tumblr.com/5f6db68c3ae5869b19d077e32c396222/tumblr_n7w5ux9m3a1qjechlo1_500.jpg"]
    let arrayLength = onderwerp.length;
