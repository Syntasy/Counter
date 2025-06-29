window.onload = function () {
    const myButton = document.getElementById("myButton");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const label3 = document.getElementById("label3");

    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const dice3 = document.getElementById("dice3");

    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    const min = 1;
    const max = 6;

    myButton.onclick = function () {
        label1.textContent = "";
        label2.textContent = "";
        label3.textContent = "";

        dice1.classList.add("roll-animation");
        dice2.classList.add("roll-animation");
        dice3.classList.add("roll-animation");

        let rollDuration = 1000;
        let interval = 100;
        let elapsed = 0;

        const rolling = setInterval(() => {
            dice1.textContent = diceFaces[Math.floor(Math.random() * 6)];
            dice2.textContent = diceFaces[Math.floor(Math.random() * 6)];
            dice3.textContent = diceFaces[Math.floor(Math.random() * 6)];

            elapsed += interval;
            if (elapsed >= rollDuration) {
                clearInterval(rolling);

                dice1.classList.remove("roll-animation");
                dice2.classList.remove("roll-animation");
                dice3.classList.remove("roll-animation");

                const randomNum1 = Math.floor(Math.random() * max) + min;
                const randomNum2 = Math.floor(Math.random() * max) + min;
                const randomNum3 = Math.floor(Math.random() * max) + min;

                dice1.textContent = diceFaces[randomNum1 - 1];
                dice2.textContent = diceFaces[randomNum2 - 1];
                dice3.textContent = diceFaces[randomNum3 - 1];

                label1.textContent = `You rolled a ${randomNum1}`;
                label2.textContent = `You rolled a ${randomNum2}`;
                label3.textContent = `You rolled a ${randomNum3}`;
            }
        }, interval);
    };
};
