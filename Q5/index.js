 var board = document.getElementById("board");

        var position = 1;

        // Snake positions
        var snakes = {
            17: 7,
            54: 34,
            62: 19,
            98: 79
        };

        // Ladder positions
        var ladders = {
            3: 22,
            8: 30,
            28: 84,
            58: 77
        };

        // Create 100 cells
        for (var i = 100; i >= 1; i--) {

            var cell = document.createElement("div");

            cell.className = "cell";
            cell.id = "cell" + i;
            cell.innerHTML = i;

            if (snakes[i]) {
                cell.classList.add("snake");
                cell.innerHTML = i + " 🐍";
            }

            if (ladders[i]) {
                cell.classList.add("ladder");
                cell.innerHTML = i + " 🪜";
            }

            board.appendChild(cell);
        }

        // Display player
        function showPlayer() {

            // Remove previous player position
            for (var i = 1; i <= 100; i++) {
                document.getElementById("cell" + i)
                    .classList.remove("player");
            }

            // Highlight current position
            document.getElementById("cell" + position)
                .classList.add("player");

            document.getElementById("position").innerHTML =
                "Player Position: " + position;
        }

        // Roll dice
        function rollDice() {

            if (position == 100) {
                return;
            }

            var dice = Math.floor(Math.random() * 6) + 1;

            document.getElementById("dice").innerHTML =
                "Dice: " + dice;

            // Move player
            if (position + dice <= 100) {
                position = position + dice;
            }

            // Check snake
            if (snakes[position]) {
                position = snakes[position];
                alert("Oops! Snake bites you.");
            }

            // Check ladder
            else if (ladders[position]) {
                position = ladders[position];
                alert("Great! You climbed a ladder.");
            }

            showPlayer();

            // Check winner
            if (position == 100) {
                alert("Congratulations! You won!");
            }
        }

        showPlayer();