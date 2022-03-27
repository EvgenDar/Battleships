var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Добрейшего времени суток! Это мини-игра Морской бой :) Представь, что в 7 ячейках по горизонтали ••••••• (от 0 до 6) расположен 3-ех палубный корабль врага. Твоя задача: потопить его за меньшее количество попыток. АГОООНЬ!!! (введи число 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Введи валидное значение 0-6");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попал");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Корабль потоплен");
			}
		} else {
			alert("Мимо");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);
