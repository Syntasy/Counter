const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1));

let attempts = 0;
let guess;
let running = true;

while(running == true){
    guess = window.prompt("guess a number 1-100");
    guess = Number(guess);
    
    if (isNaN(guess)){
        window.alert("enter a valid number 1-100");
    }
    else if(guess <minNum || guess > maxNum){
        window.alert("enter a valid number 1-100");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("too low, try again");
        }
        else if(guess > answer){
            window.alert("too High, try again");
        }
        else{
            window.alert(`correct, the answer was ${answer}. it took ${attempts} attempts`);
            running = false;
        }

    }


    
}