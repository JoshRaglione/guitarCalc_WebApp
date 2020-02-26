$(function() {

    let Notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    
    let fret = document.querySelector(".fret-number");
    let note = document.querySelector(".note");
    
    let correct = document.querySelector(".correct");
    let incorrect = document.querySelector(".incorrect");
    let incorrectCounter = 0;
    let correctCounter = 0;
    
    function noteDecision(randomFret, randomNote, randomEnd) {
    
            if(randomEnd == 1 && randomFret != 11) {
                fret.innerHTML = randomFret + "st";
            }
            if(randomEnd == 2 && randomFret != 12) {
                fret.innerHTML = randomFret + "nd";
            }
            if(randomEnd == 3 && randomFret != 13) {
                fret.innerHTML = randomFret + "rd";
            } 
            else {
                fret.innerHTML = randomFret + "th";
            }
        
            note.innerHTML = Notes[randomNote]
        
    }
    
            $("button").click(function() {
                let newAnswer = localStorage.getItem("answer");
                
                console.log(newAnswer);
                let fired_button = $(this).val();
                
                if(fired_button == newAnswer) {
                    correctCounter += 1;
                    correct.innerHTML = correctCounter;
                    randomNumber();
                } else {
                    incorrectCounter += 1;
                    incorrect.innerHTML = incorrectCounter;
                }
                if(correctCounter == 20) {
                    location.reload();
                }
            });
    
    function randomNumber() {
        let randomFret = Math.floor(Math.random(0) * 24);
        let randomNote = Math.floor(Math.random() * 12);
        let randomEnd = String(randomFret).slice(-1);
        let answer = (randomFret + randomNote) % 12
        console.log("TCL: randomNumber -> answer", answer)
        localStorage.setItem("answer", answer)
        noteDecision(randomFret, randomNote, randomEnd)
        }

    randomNumber();
});

