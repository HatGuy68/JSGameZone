let score = 0;
let currentTime = 60
var scoreDisplay = document.getElementById('score');

let slotID = 'slot' + (Math.floor(Math.random() * 9) + 1);
let part1 = setInterval(() => {
	document.getElementById(slotID).innerHTML = '<img src="assets/images/mole.png" class="w-100" onclick="increaseCount()" draggable="false">';
	slotID = 'slot' + (Math.floor(Math.random() * 9) + 1);
}, 1000);
let part2 = setInterval(() => {
	setTimeout(() => {
		clearMoles();
	}, 500);
}, 1000);

function clearMoles() {
	for (var x = 1; x < 10; x++) {
		let slotID = 'slot' + x;
		document.getElementById(slotID).innerHTML = '';
	}
}

function increaseCount() {
	clearMoles();
    score++;
	scoreDisplay.innerHTML = score;
}


function countDown() {
    currentTime--

    if (currentTime == 0) {
        clearInterval(part1);
        clearInterval(part2);
        clearInterval(countDownTimerId)
        alert('GAME OVER! Your final score is ' + score)
    }

}

let countDownTimerId = setInterval(countDown, 1000)

console.log(score);